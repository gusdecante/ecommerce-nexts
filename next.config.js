const { withFrameworkConfig } = require("./framework/common/config");

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local",
  },
  reactStrictMode: true,
});

console.log("next.confi.js", JSON.stringify(module.exports, null, 2));
