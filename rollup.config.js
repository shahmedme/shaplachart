import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript";
import pkg from "./package.json";

export default [
	{
		input: "packages/shapla/src/js/index.ts",
		output: {
			name: "shapla",
			file: pkg.browser,
			format: "umd",
		},
		plugins: [resolve(), commonjs(), typescript()],
	},
	{
		input: "packages/shapla/src/js/index.ts",
		external: ["d3"],
		plugins: [typescript()],
		output: [
			{ file: pkg.main, format: "cjs" },
			{ file: pkg.module, format: "es" },
		],
	},
];
