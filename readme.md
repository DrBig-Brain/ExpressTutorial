# Express Notes Repository

This repository is a collection of small Express.js examples, demo apps, and static frontend samples for learning and experimentation.

## Quick Start

- Install dependencies: `npm install`
- Run an example: `node express-basic.js` (or any other example file)
- Open the app in a browser (default ports vary per example)

## Top-level files

- `api.js` — example API endpoints serving JSON (uses `data.js`).
- `data.js` — sample data (people/products arrays) used by examples.
- `express-basic.js` — a minimal Express server example.
- `expressFromFile.js` — example showing serving content loaded from files.
- `http-server.js` — plain Node HTTP server (no Express) for comparison.
- `middleware.js` — demonstrates middleware usage.
- `routeParams.js` — demonstrates route parameters (e.g., `/api/people/:id`).
- `queryString.js` — demo of query string parsing for filtering/limiting results.
- `POSTPUTDELETE.js` — examples for `POST`, `PUT`, and `DELETE` handlers.
- `package.json` — project metadata and scripts.
- `readme.md` — this file.

## Notable directories

- `app/`
  - `index.html` — simple HTML app example.
- `method-public/`
  - static demo files for form and fetch examples: `index.html`, `javascript.html`, `styles.css`, `normalize.css`.
- `navbar-app/`
  - small frontend demo with a navigation bar: `index.html`, `browser-app.js`, `styles.css`.
- `public/` and `public copy/`
  - static assets used by some examples (`browser-app.js`, `styles.css`). `public copy/` appears to be a backup duplicate.
- `router/`
  - `app.js` — example app demonstrating route modularization.
  - `controller/people.js` — controller logic for people endpoints.
  - `routes/auth.js` — auth-related routes.
  - `routes/people.js` — people-related routes.

## How to explore

 - Start a server: `node express-basic.js` (or `node api.js`, `node router/app.js`, etc.).
 - Use `curl` or a browser to hit endpoints like `/api/people`, `/api/people/:id`, or frontend examples under `method-public/` and `public/`.

## Notes

 - `method-public/` contains a traditional form example (`index.html`) that posts to a `/login` route; ensure the server you run implements the matching POST route.
 - The `router/` directory shows how to split routes and controllers for cleaner apps.

## Contributing

This is primarily a personal learning repository. Feel free to fork, add examples, or improve documentation.

---

*Updated by DrBigBrain on Linux.*