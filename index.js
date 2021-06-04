const { build } = require("esbuild");
const { sassPlugin } = require("esbuild-sass-plugin");

build({
  entryPoints: ["src/index.scss"],
  bundle: true,
  outdir: "dist",
  plugins: [sassPlugin()],
  external: [
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
  ],
});
