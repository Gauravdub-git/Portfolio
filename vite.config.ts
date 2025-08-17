import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  root: "client", // 👈 now Vite knows where index.html is
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  base: "/Portfolio/", // 👈 repo name
  build: {
    outDir: "../dist", // 👈 output goes to root /dist
    emptyOutDir: true,
  },
});
