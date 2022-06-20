module.exports = {
  distDir: "../../dist/client",
  exportTrailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
      "/resume": { page: "/resume" },
    };

    return paths;
  },
};
