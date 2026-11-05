import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { createApp } from '../src/app.js';

let server;
let base;

before(async () => {
  server = createApp().listen(0);
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

test('GET /github/repos sin usuario configurado devuelve lista vacía', async () => {
  const res = await fetch(`${base}/github/repos`);
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), []);
});
