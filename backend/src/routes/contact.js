// Formulario de contacto: valida el mensaje y lo guarda en la base de datos.
// Siguiente paso de aprendizaje: además enviarlo por correo (ej. nodemailer o Resend).
import { Router } from 'express';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function contactRouter(db) {
  const router = Router();

  // POST /api/contact  { name, email, message }
  router.post('/', async (req, res) => {
    const { name, email, message } = req.body ?? {};
    const errors = [];

    if (typeof name !== 'string' || !name.trim()) errors.push('El nombre es obligatorio');
    else if (name.length > 100) errors.push('El nombre es demasiado largo');
    if (typeof email !== 'string' || email.length > 254 || !EMAIL_RE.test(email)) errors.push('El email no es válido');
    if (typeof message !== 'string' || message.trim().length < 10)
      errors.push('El mensaje debe tener al menos 10 caracteres');
    else if (message.length > 5000) errors.push('El mensaje no puede superar los 5000 caracteres');

    if (errors.length) return res.status(400).json({ errors });

    await db.saveMessage({ name: name.trim(), email: email.trim(), message: message.trim() });
    res.status(201).json({ ok: true });
  });

  return router;
}
