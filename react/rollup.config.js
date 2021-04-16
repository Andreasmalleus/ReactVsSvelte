import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from "@rollup/plugin-replace";

export default {
  input: 'src/main.js',
  output: {
  sourcemap: true,
  format: 'iife',
  name: 'app',
  file: 'public/build/bundle.js'
  },
  plugins: [
    //babel needed for jsx
    babel({
      exclude: 'node_modules/**',
      presets: [
        "@babel/preset-react",
      ],
      //In some cases Babel uses helpers to avoid repeating chunks of code
      babelHelpers: 'bundled'
    }),
    //React uses process.env to determine the environment
    replace({
      'process.env.NODE_ENV' : JSON.stringify('development'),
      preventAssignment : true
    }),
    resolve({
        extensions: [".js"],
    }),
    commonjs(),
    serve({
			open: true,
			verbose: true,
			contentBase: ["", "public"],
			host: "localhost",
			port: 3000,
		}),
    livereload('public'),
  ],
};