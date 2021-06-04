const { build } = require("esbuild");

build({
  entryPoints: ["src/index.css"],
  bundle: true,
  outdir: "dist",
});
