// See: https://www.digitalocean.com/community/tutorials/build-a-reusable-component-with-angular-elements#package-your-angular-element
// This script takes the build output from the dist folder and concatenates all of the files together for easier
// consumption of our Angular elements (web components).
// It is triggered by running "npm run build:elements".

const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
    const es5Files = [
      './dist/stock-ticker-element/runtime-es5.js',
      './dist/stock-ticker-element/polyfills-es5.js',
      './dist/stock-ticker-element/main-es5.js',
    ];
    const es2015Files = [
      './dist/stock-ticker-element/runtime-es2015.js',
      './dist/stock-ticker-element/polyfills-es2015.js',
      './dist/stock-ticker-element/main-es2015.js',
    ];

    await fs.ensureDir("dist/stock-ticker-element");
    await concat(es5Files, "./dist/stock-ticker-element/stock-ticker-element-es5.js");
    await concat(es2015Files, "./dist/stock-ticker-element/stock-ticker-element-es2015.js");
})();
