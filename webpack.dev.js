const webpackConfig = require("./webpack.common");

module.exports = {
  ...webpackConfig,
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    compress: true,
    port: 5000,
  },

  mode: "development",
};
