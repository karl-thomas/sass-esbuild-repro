const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

build({
  entryPoints: ["src/index.css"],
  bundle: true,
  outdir: "dist",
  plugins: [sassPlugin()],
});
