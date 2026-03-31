#!/usr/bin/env bash
# Deploy portfolio site to Cloudflare Pages
# Usage: ./deploy.sh [branch]
# Examples:
#   ./deploy.sh              # deploys current branch
#   ./deploy.sh main         # deploys from main branch
#   ./deploy.sh build-site   # deploys from build-site branch

set -euo pipefail

PROJECT_NAME="graham-nessler-portfolio"
PORTFOLIO_DIR="portfolio"

# Determine branch
if [ -n "${1:-}" ]; then
  BRANCH="$1"
  echo "Deploying from branch: $BRANCH"
  git checkout "$BRANCH"
else
  BRANCH=$(git rev-parse --abbrev-ref HEAD)
  echo "Deploying from current branch: $BRANCH"
fi

# Build
echo "Building site..."
cd "$PORTFOLIO_DIR"
npm install --silent
npx astro build

# Deploy
echo "Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch="$BRANCH"

echo ""
echo "Deployed successfully!"
echo "Production URL: https://${PROJECT_NAME}.pages.dev"
