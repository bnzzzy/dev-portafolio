// Punto de entrada: conecta la base de datos y levanta el servidor HTTP.
import { createApp } from './app.js';
import { createDb } from './db/index.js';

const PORT = process.env.PORT ?? 3000;

const db = createDb();
await db.migrate();

const server = createApp({ db }).listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});

// Docker manda SIGTERM al detener el contenedor: cerramos todo con orden.
process.on('SIGTERM', () => server.close(() => db.close()));
