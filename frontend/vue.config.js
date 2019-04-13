const BundleTracker = require("webpack-bundle-tracker");

let bundle_tracker_config = {}
if (process.env.NODE_ENV === "production"){
    bundle_tracker_config = {
      path: "../",
      filename: "webpack-stats.json"
    };
}else{
    bundle_tracker_config = {
        path: "../",
        filename: "webpack-stats.json"
    }
}
  module.exports = {
    outputDir:
      "../assets/dist",
    publicPath: 
      process.env.NODE_ENV === "production"
        ? `${process.env.VUE_APP_STATIC_URL}dist/`
        : "http://localhost:8080/",
    devServer: {
      publicPath: "http://localhost:8080/",
      port: "8080",
      host: "localhost",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
        "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
        "Access-Control-Allow-Credentials": "true"
      }
    },
    configureWebpack: {
      plugins: [new BundleTracker(bundle_tracker_config)],
    }
  };