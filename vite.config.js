import postcssLit from "rollup-plugin-postcss-lit";
import { defineConfig } from "vite";
import mpa from "vite-plugin-mpa";
import tsConfigPaths from "vite-tsconfig-paths";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [tsConfigPaths(), mpa({ open: false }), postcssLit({})],
});
