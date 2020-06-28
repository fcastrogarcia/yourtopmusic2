const path = require("path");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: { material: "@material-ui/core" },
      },
    },
  },
  babel: {
    plugins: ["babel-plugin-styled-components"],
  },
};
