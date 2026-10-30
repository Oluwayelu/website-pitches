#!/bin/bash
# usage: tools/lh.sh NN-slug
cd "$(dirname "$0")/.." ; P=$((4100 + RANDOM % 500))
npx serve "$1/site/out" -l $P >/dev/null 2>&1 & S=$!; sleep 3
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npx lighthouse http://localhost:$P/ --quiet --chrome-flags="--headless=new" --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=/tmp/lh-$1.json >/dev/null 2>&1
kill $S 2>/dev/null
node -e "const r=require('/tmp/lh-$1.json');console.log(Object.values(r.categories).map(c=>c.title+' '+Math.round(c.score*100)).join(' | '));for(const a of Object.values(r.audits)){if(a.score!==null&&a.score<0.9&&a.scoreDisplayMode!=='informative'&&a.scoreDisplayMode!=='notApplicable')console.log(' -',a.id,a.score,(a.displayValue||''))}"
