import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";
import "vitest/config"; // <-- just dummy import

export default defineConfig({
  base: "/weather/",
  plugins: [react(), svgr()],
  test: {
    globals: true,
    setupFiles: "src/tests/test-setup.ts",
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
