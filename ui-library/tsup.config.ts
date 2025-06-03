// ui-library/tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"], // Main entry point for the library
  format: ["esm", "cjs"],   // Output both ESM and CommonJS formats for broad compatibility [8, 13, 14]
  dts: true,                // Generate TypeScript declaration files (.d.ts) [1, 8, 13, 14]
  clean: true,              // Clean the dist directory before building [8, 13, 14]
  minify: true,             // Minify the output for production [8, 9, 13]
  splitting: true,          // Enable code splitting for smaller bundles [8, 13]
  sourcemap: true,          // Generate sourcemaps for debugging [8, 14]
  external: ["react", "react-dom"], // Mark React and ReactDOM as external dependencies [13, 14]
  // Optional: Add PostCSS support if you have complex CSS processing beyond Tailwind's direct output
  // loader: { '.css': 'default' }, // [14] - tsup can handle CSS, but Tailwind v4's CSS-first approach might make this less critical for utility classes.
  // This is the crucial part to enforce .mjs and .cjs extensions
  esbuildOptions(options, context) {
    if (context.format === 'esm') {
      options.outExtension = { '.js': '.mjs' };
    } else if (context.format === 'cjs') {
      options.outExtension = { '.js': '.cjs' };
    }
    // For type declarations, tsup handles .d.ts, no need to configure here.
    // However, if you had custom .css imports, you might add:
    // if (context.format === 'esm' && options.assetNames) {
    //   options.assetNames = '[name].css'; // Or similar for CSS assets
    // }
  },
});