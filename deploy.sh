#!/usr/bin/env bash
# Deploy portfolio site to Cloudflare Pages
# Usage: ./deploy.sh [--dry-run] [branch]
# Examples:
#   ./deploy.sh              # deploys current branch
#   ./deploy.sh main         # deploys from main branch
#   ./deploy.sh --dry-run    # build only, show what would be deployed
#   ./deploy.sh --dry-run main

set -euo pipefail

PROJECT_NAME="graham-nessler-portfolio"
PORTFOLIO_DIR="portfolio"
DRY_RUN=false

# Parse flags
while [[ "${1:-}" == --* ]]; do
  case "$1" in
    --dry-run) DRY_RUN=true; shift ;;
    *) echo "Unknown flag: $1"; exit 1 ;;
  esac
done

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

if [ "$DRY_RUN" = true ]; then
  echo ""
  echo "=== DRY RUN ==="
  echo "Would deploy to Cloudflare Pages:"
  echo "  Project: $PROJECT_NAME"
  echo "  Branch:  $BRANCH"
  echo "  Source:   $(pwd)/dist/"
  echo "  Command:  wrangler pages deploy dist --project-name=\"$PROJECT_NAME\" --branch=\"$BRANCH\""
  echo ""
  echo "Files that would be deployed:"
  find dist -type f | sort
  echo ""
  echo "Dry run complete. No files were deployed."
  exit 0
fi

# Deploy
echo "Deploying to Cloudflare Pages..."
wrangler pages deploy dist --project-name="$PROJECT_NAME" --branch="$BRANCH"

echo ""
echo "Deployed successfully!"
echo "Production URL: https://${PROJECT_NAME}.pages.dev"
