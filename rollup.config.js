import babel from "rollup-plugin-babel";
import bundleSize from "rollup-plugin-bundle-size";
import commonjs from "rollup-plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

export default [
	{
		input: "src/js/index.js",
		output: {
			sourcemap: true,
			name: "shapla",
			file: pkg.browser,
			format: "umd",
		},
		plugins: [
			commonjs(),
			babel({
				exclude: ["node_modules/**"],
			}),
			terser(),
			bundleSize(),
		],
	},
	{
		input: "src/js/chart.js",
		output: [
			{ file: pkg.common, format: "cjs", sourcemap: true },
			{ file: pkg.module, format: "es", sourcemap: true },
		],
		plugins: [
			babel({
				exclude: ["node_modules/**"],
			}),
			terser(),
			postcss(),
			bundleSize(),
		],
	},
];
