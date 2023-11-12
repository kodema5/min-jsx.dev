import { context, build } from "esbuild";
import { globalExternals } from "@fal-works/esbuild-plugin-global-externals";
import * as React from "react";
// import * as Styled from "styled-components";
import * as ReactDOM from "react-dom";
import * as ReactBootstrap from "react-bootstrap";

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
    "react-bootstrap": {
        varName: "ReactBootstrap",
        namedExports: Object.keys(ReactBootstrap).filter((key) => key !== "default"),
    }
}

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
        external: ["react", "react-dom", "react-boostrap"],
        plugins: [
            globalExternals(globals),
            {
                name:'rebuild-notify',
                setup(build) {
                    build.onEnd(res => {
                        console.log(`rebuilt with ${res.errors.length} errors`)
                    })
                }
            }
        ],
    })
    // let { host, port } = await ctx.serve()
    // console.log(`serving at ${host}:${port}`)

    await ctx.watch()
    console.log('watching...')
} catch(e) {
    console.error(e)
    process.exit(1)
}