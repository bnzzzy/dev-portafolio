#!/usr/bin/env bash
# Sube el proyecto al servidor y reconstruye los contenedores.
# Uso (desde Git Bash):  ./deploy.sh
#
# Los datos del servidor van en .deploy.env (ignorado por git), ej:
#   SERVER=usuario@ip-del-servidor
#   SITE_URL=https://tudominio.com
set -euo pipefail

[ -f .deploy.env ] && source .deploy.env
: "${SERVER:?Falta SERVER. Crea .deploy.env (ver .deploy.env.example)}"
DIR="${DIR:-docker/portafolio}"

echo "→ Subiendo código a $SERVER:~/$DIR"
tar -czf - \
  --exclude=node_modules --exclude=dist --exclude=.angular \
  --exclude=.git --exclude='.env' --exclude='.deploy.env' --exclude='*.log' . \
  | ssh "$SERVER" "mkdir -p ~/$DIR && tar -xzf - -C ~/$DIR"

echo "→ Reconstruyendo contenedores"
ssh "$SERVER" "cd ~/$DIR && docker compose up -d --build && docker image prune -f >/dev/null"

echo "✔ Listo: ${SITE_URL:-}"
