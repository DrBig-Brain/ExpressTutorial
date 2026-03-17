# Express Notes Repository

This repository contains a collection of notes, examples, and demonstration files for learning and experimenting with [Express.js](https://expressjs.com/), the popular Node.js web application framework.

## 📁 Repository Structure

The project is organized into a few key files and directories:

- `express-basic.js` - A minimal Express server example.
- `api.js` - An Express server demonstrating API endpoints that serve JSON data from `data.js`.
- `data.js` - Sample data file containing products and people arrays exported as modules.
- `routeParams.js` - An Express server demonstrating route parameters to fetch individual resources by ID.
- `middleware.js` - An Express server demonstrating the use of middleware functions.
- `queryString.js` - An Express server demonstrating query string parameters for filtering and limiting data.
- `expressFromFile.js` - An Express setup demonstrating loading content from external files.
- `http-server.js` - A basic HTTP server implemented without Express for comparison.
- `package.json` - Contains project metadata and dependencies.
- `readme.md` - This file.
- `app/` - Contains a simple HTML application example.
  - `index.html` - Main HTML file for the app example.
- `navbar-app/` - A separate frontend application with navigation bar functionality.
  - `browser-app.js` - Client-side JavaScript for the navbar application.
  - `index.html` - HTML for the navbar example.
  - `styles.css` - Styling for the navbar app.
- `public/` - Static assets served by Express in some examples.
  - `browser-app.js` - Client script for frontend demo.
  - `styles.css` - CSS for frontend demo.
- `public copy/` - A duplicate of the `public/` directory (likely a backup).

## 🚀 Getting Started

To experiment with these notes on your local machine:

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd express
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run an example**
   ```bash
   node express-basic.js
   ```
   or try one of the other `.js` files to compare behavior.

4. **Open a browser** and navigate to `http://localhost:3000` (or the port specified in the example) to see the app in action.

## 📝 Notes and Tips

- These files are intended for learning and reference; feel free to modify them as you experiment.
- Use the `public/` directory to serve static assets via `express.static()` middleware.
- Compare `http-server.js` with the Express examples to understand the benefits Express provides, such as routing and middleware.

## ✅ Contributing

This is a personal notes repository, but you're welcome to fork it and adapt it for your own learning. Feel free to add more examples or documentation as you explore Express.js.

## 📚 Resources

- [Express.js Official Website](https://expressjs.com/)
- [Express.js GitHub Repository](https://github.com/expressjs/express)
- [Node.js Documentation](https://nodejs.org/en/docs/)

---

*Created by DrBigBrain on Linux, March 2026.*
## 📅 Updates — March 17, 2026

- **Added `GET.js`**: a small Express server (listens on port 5000) that serves static files from `method-public`, provides a `POST /login` route for the traditional form example, and a `GET /api/people` endpoint that returns the sample `people` data from `data.js`.

- **Added `method-public/`**: static demo files including:
  - `index.html` — a traditional HTML form that posts to `/login` (method: POST).
  - `javascript.html` — a JS-driven example that fetches `GET /api/people` (via Axios) and attempts to `POST` to `/api/people` from the client.
  - `styles.css`, `normalize.css` — styling for the examples.

- **Note:** The JavaScript demo posts to `/api/people` from the client; ensure a server-side `POST /api/people` handler exists if you expect the client to add people. `GET.js` currently implements `GET /api/people` and `POST /login`.

*Created by DrBigBrain on Linux, March 2026.*