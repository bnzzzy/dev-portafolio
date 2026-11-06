-- Esquema de la base de datos. Se ejecuta al arrancar la API;
-- "IF NOT EXISTS" hace que sea seguro correrlo muchas veces.

CREATE TABLE IF NOT EXISTS projects (
  slug        TEXT PRIMARY KEY,
  title       TEXT NOT NULL,
  summary     TEXT NOT NULL,
  description TEXT NOT NULL,
  tags        TEXT[] NOT NULL DEFAULT '{}',
  highlight   TEXT,
  metrics     JSONB NOT NULL DEFAULT '[]',
  repo_url    TEXT,
  demo_url    TEXT,
  image       TEXT,
  featured    BOOLEAN NOT NULL DEFAULT false,
  position    INTEGER NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS contact_messages (
  id         SERIAL PRIMARY KEY,
  name       TEXT NOT NULL,
  email      TEXT NOT NULL,
  message    TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
