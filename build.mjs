import { context, build } from "esbuild";
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";
import * as React from "react";
// import * as Styled from "styled-components";
import * as ReactDOM from "react-dom";

const globals = {
  // "styled-components": {
  //   varName: "Styled",
  //   namedExports: Object.keys(Styled).filter((key) => key !== "default"),
  // },
  react: {
      varName: "React",
      namedExports: Object.keys(React).filter((key) => key !== "default"),
  },
  "react-dom": {
      varName: "ReactDOM",
      namedExports: Object.keys(ReactDOM).filter((key) => key !== "default"),
  },
};

try {
    let ctx = await context({
        entryPoints: ['src/app.jsx'],
        bundle: true,
        minify: true,
        sourcemap: true,
        // outfile: 'www/app.min.js',
        outdir: 'www',
        define: {
            global: "window",
        },
        target: ['es2020'],
        // format: "esm",
        external: ["react", "react-dom"],
        plugins: [globalExternals(globals)],
    })
    await ctx.watch()
    console.log('watching ...')
} catch(e) {
    console.error(e)
    process.exit(1)
}