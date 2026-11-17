// Límite simple de peticiones por IP, en memoria (sin dependencias).
// Sirve para frenar bots que llenan el formulario de contacto.
// Si el backend se reinicia, los contadores vuelven a cero (suficiente para este sitio).

// IP real del visitante. El tráfico llega por Cloudflare Tunnel -> nginx -> backend,
// así que la IP original viene en el header CF-Connecting-IP.
export function clientIp(req) {
  return req.get('cf-connecting-ip') || req.get('x-real-ip') || req.ip;
}

export function rateLimit({ max, windowMs, message = 'Demasiadas solicitudes, intenta más tarde' }) {
  const hits = new Map(); // ip -> [timestamps]

  // Limpieza periódica para que el Map no crezca sin fin
  const timer = setInterval(() => {
    const limit = Date.now() - windowMs;
    for (const [ip, times] of hits) {
      const recent = times.filter((t) => t > limit);
      if (recent.length) hits.set(ip, recent);
      else hits.delete(ip);
    }
  }, windowMs);
  timer.unref();

  return (req, res, next) => {
    const now = Date.now();
    const ip = clientIp(req);
    const recent = (hits.get(ip) ?? []).filter((t) => t > now - windowMs);
    if (recent.length >= max) {
      res.set('Retry-After', String(Math.ceil(windowMs / 1000)));
      return res.status(429).json({ errors: [message] });
    }
    recent.push(now);
    hits.set(ip, recent);
    next();
  };
}
