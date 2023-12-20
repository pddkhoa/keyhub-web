import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dotenv from "dotenv";

export default defineConfig({
    plugins: [react()],
    define: {
        "process.env": dotenv.config().parsed,
        __APP_ENV__: process.env.VITE_VERCEL_ENV,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
