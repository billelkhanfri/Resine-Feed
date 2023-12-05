import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [react(), VitePWA({ register: "autoUpdate" })],
  server: {
    host: "0.0.0.0",
    port: 8000,
    // other server options if needed
  },
});
