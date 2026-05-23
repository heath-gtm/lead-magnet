#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Setting origin to heath-gtm/lead-magnet"
git remote set-url origin https://github.com/heath-gtm/lead-magnet.git

echo "→ Remote:"
git remote -v

echo "→ Status:"
git status -sb

echo ""
echo "Rename the GitHub repo to lead-magnet if you have not already:"
echo "  gh repo rename lead-magnet --repo heath-gtm/Lead-Magnet -y"
echo ""
echo "Then push:"
echo "  git push -u origin main"
