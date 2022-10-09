var fs = require("fs");
fs.readFile(
  "node_modules/payengine/dist/payengine.esm.js",
  "utf8",
  function (err, data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(
      /console.payengine./g,
      "staging-sandbox.payengine."
    );

    fs.writeFile(
      "node_modules/payengine/dist/payengine.esm.js",
      result,
      "utf8",
      function (err) {
        if (err) return console.log(err);
      }
    );
  }
);
