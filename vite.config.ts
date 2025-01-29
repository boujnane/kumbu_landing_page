import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    port: 3001,
    hmr: false,
  },
  preview: {
    host: true,
    port: 3001,
  },
  build: {
    rollupOptions: {
      external: ["next/script"], // Ignore "next/script" lors du build
    },
  },
});
