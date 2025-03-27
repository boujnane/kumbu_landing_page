import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
  host: "localhost",
    port: 3001,
    hmr: false,
  },
  preview: {
  host: "localhost",
    port: 3001,
  },
  build: {
    rollupOptions: {
      external: ["next/script"],
    },
  },
});
