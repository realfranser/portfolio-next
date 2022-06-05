const functions = require("firebase-tools");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "prod";

const server = next({
  dev: isDev,
  conf: { distDir: "./build" },
});

const nextjsHandle = server.getRequestHandler();

/* Firebase function */
exports.nextServer = functions.https.onRequest((req, res) => {
  return server.prepare().then(() => {
    return nextjsHandle(req, res);
  });
});
