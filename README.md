# Rollo

A robot-ball side-scroller made for Val. Pick Rollo's color and roll through the level with touch controls. Built for phones and tablets.

**Play it:** [https://robot-ball-game.hckshr.workers.dev/](https://robot-ball-game.hckshr.workers.dev/)

The whole thing is one self-contained `index.html` (no build step, no dependencies). It's served by a tiny Cloudflare Worker.

## Run locally

Open `index.html` in a browser.

## Deploy

```sh
node build.mjs        # regenerate worker.js from index.html
npx wrangler deploy   # publish to Cloudflare Workers
```
