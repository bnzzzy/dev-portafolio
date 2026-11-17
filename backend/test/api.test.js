import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';

// Base de datos falsa en memoria: los tests no necesitan PostgreSQL.
const messages = [];
const fakeDb = {
  listProjects: async () => [{ slug: 'demo', title: 'Demo' }],
  getProject: async (slug) => (slug === 'demo' ? { slug: 'demo', title: 'Demo' } : null),
  saveMessage: async (m) => messages.push(m),
};

let server;
let base;

before(async () => {
  server = createApp({ db: fakeDb }).listen(0);
  await new Promise((r) => server.once('listening', r));
  base = `http://localhost:${server.address().port}/api`;
});

after(() => server.close());

test('GET /health responde ok', async () => {
  const res = await fetch(`${base}/health`);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).status, 'ok');
});

test('GET /projects devuelve una lista', async () => {
  const res = await fetch(`${base}/projects`);
  assert.equal(res.status, 200);
  assert.ok(Array.isArray(await res.json()));
});

test('GET /projects/:slug existente devuelve el proyecto', async () => {
  const res = await fetch(`${base}/projects/demo`);
  assert.equal(res.status, 200);
  assert.equal((await res.json()).slug, 'demo');
});

test('GET /projects/:slug inexistente da 404', async () => {
  const res = await fetch(`${base}/projects/no-existe`);
  assert.equal(res.status, 404);
});

test('POST /contact valida los campos', async () => {
  const res = await fetch(`${base}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '', email: 'malo', message: 'hola' }),
  });
  assert.equal(res.status, 400);
  assert.equal((await res.json()).errors.length, 3);
});

test('POST /contact válido guarda el mensaje', async () => {
  const res = await fetch(`${base}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Ana', email: 'ana@ejemplo.com', message: 'Hola, me interesa tu trabajo' }),
  });
  assert.equal(res.status, 201);
  assert.equal(messages.length, 1);
  assert.equal(messages[0].email, 'ana@ejemplo.com');
});

test('POST /contact rechaza mensajes demasiado largos', async () => {
  const res = await fetch(`${base}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': '10.0.0.1' },
    body: JSON.stringify({ name: 'Ana', email: 'ana@ejemplo.com', message: 'x'.repeat(5001) }),
  });
  assert.equal(res.status, 400);
});

test('POST /contact limita los envíos por IP', async () => {
  const srv = createApp({ db: fakeDb, contactLimit: { max: 2, windowMs: 60_000 } }).listen(0);
  await new Promise((r) => srv.once('listening', r));
  const url = `http://localhost:${srv.address().port}/api/contact`;
  const send = (ip) =>
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': ip },
      body: JSON.stringify({ name: 'Bot', email: 'bot@ejemplo.com', message: 'Mensaje de prueba spam' }),
    });
  try {
    assert.equal((await send('1.1.1.1')).status, 201);
    assert.equal((await send('1.1.1.1')).status, 201);
    assert.equal((await send('1.1.1.1')).status, 429);
    assert.equal((await send('2.2.2.2')).status, 201); // otra IP no se ve afectada
  } finally {
    srv.close();
  }
});

test('GET /github/repos sin usuario configurado devuelve lista vacía', async () => {
  const res = await fetch(`${base}/github/repos`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), []);
});
