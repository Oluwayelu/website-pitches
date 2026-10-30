#!/bin/bash
# usage: tools/inspect.sh NN-slug  (serves out/ and runs the taste inspector)
cd "$(dirname "$0")/.."; P=$((4600 + RANDOM % 300))
npx serve "$1/site/out" -l $P >/dev/null 2>&1 & S=$!; sleep 3
node /Users/mac/.agents/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:$P/ --out $1/screens/inspect 2>&1 | sed 's/\x1b\[[0-9;]*m//g'
kill $S 2>/dev/null
