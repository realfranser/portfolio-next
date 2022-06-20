const functions = require("firebase-functions");
const { default: next } = require("next");

const isDev = process.env.NODE_ENV !== "production";

const server = next({
  dev: isDev,
  conf: { distDir: "./build/" },
});

const nextjsHandle = server.getRequestHandler();

/* Firebase function */
exports.nextServer = functions.https.onRequest(async (req, res) => {
  await server.prepare();
  return await nextjsHandle(req, res);
});
