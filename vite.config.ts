import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

dotenv.config(); // Charge les variables d'environnement depuis un fichier .env

export default defineConfig({
  base: "./",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: process.env.HOST || "0.0.0.0",
    port: 3001,
    hmr: false,
  },
  preview: {
    host: process.env.HOST || "0.0.0.0",
    port: 3001,
  },
  build: {
    rollupOptions: {
      external: ["next/script"],
    },
  },
});
