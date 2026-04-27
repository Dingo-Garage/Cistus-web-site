import { defineConfig } from "vitest/config";
import path from "path";

const templateRoot = path.resolve(import.meta.dirname);

export default defineConfig({
  root: templateRoot,
  resolve: {
    alias: {
      "@": path.resolve(templateRoot, "src"),
    },
  },
  test: {
    include: ["src/**/*.{test,spec}.ts", "src/**/*.{test,spec}.tsx"],
  },
});
