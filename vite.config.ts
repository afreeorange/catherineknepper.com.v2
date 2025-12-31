import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@mdx-js/rollup";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    {
      enforce: "pre",
      ...mdx({ jsxImportSource: "preact", remarkPlugins: [] }),
    },
    preact(),
    tailwindcss(),
  ],
});
