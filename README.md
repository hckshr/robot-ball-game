# Astromech Galaxy Run

A phone-friendly side-scroller for Val. Pick an astromech, roll through a star system, and bring ship parts home so the ship can fly to the next star.

**Play it:** [https://astromech-galaxy-run.hckshr.workers.dev/](https://astromech-galaxy-run.hckshr.workers.dev/)

This is a non-commercial fan game. Star Wars and the droid names belong to their owners. The pictures and sounds in this game are original drawings and synthesized beeps, not copies of any film, show, or game.

The droids are R2-D2, Chopper, BB-8, BB-9E, R5-D4, and R2-Q5. Their names live in one list near the top of `index.html` if you want to change them later.

The whole thing is one self-contained `index.html` (no build step, no dependencies). It's served by a tiny Cloudflare Worker.

## Run locally

Open `index.html` in a browser.

## Deploy

```sh
node build.mjs        # regenerate worker.js from index.html
npx wrangler deploy   # publish to Cloudflare Workers
```
