// Formulario de contacto. Por ahora solo valida y registra el mensaje en consola.
// Siguiente paso de aprendizaje: enviarlo por correo (ej. nodemailer o Resend).
import { Router } from 'express';

const router = Router();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// POST /api/contact  { name, email, message }
router.post('/', (req, res) => {
  const { name, email, message } = req.body ?? {};
  const errors = [];

  if (!name?.trim()) errors.push('El nombre es obligatorio');
  if (!EMAIL_RE.test(email ?? '')) errors.push('El email no es válido');
  if (!message?.trim() || message.trim().length < 10)
    errors.push('El mensaje debe tener al menos 10 caracteres');

  if (errors.length) return res.status(400).json({ errors });

  console.log('Nuevo mensaje de contacto:', { name, email, message });
  res.status(201).json({ ok: true });
});

export default router;
