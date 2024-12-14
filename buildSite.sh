#!/bin/bash

cd ../destiny-definitions-site/apps/site
rm -rf out

pnpm run build
pnpm next export

cd ../../../destiny-definitions-site-static

rm -rf public/*
cp -r ../destiny-definitions-site/apps/site/out/* public/

./prune.sh public --actually-delete