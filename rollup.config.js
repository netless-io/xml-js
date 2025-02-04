
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import polyfill from "rollup-plugin-node-polyfills";
import pkg from "./package.json"

export default {
    input: "lib/index.mjs",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: false,
            exports: "auto",
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: false,
            exports: "auto",
        },
    ],
    plugins: [
        nodeResolve({ preferBuiltins: false }),
        commonjs(),
        polyfill(),
    ],
};
