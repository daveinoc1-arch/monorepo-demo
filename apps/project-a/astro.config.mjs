import { defineConfig } from "astro/config";

export default defineConfig({
    build: {
        format: "file",
        inlineStylesheets: "never",
        assets: "assets",
    },
    vite: {
        build: {
            rollupOptions: {
                output: {
                    assetFileNames: "assets/[name]-[hash][extname]",
                    entryFileNames: "assets/[name]-[hash].js",
                    chunkFileNames: "assets/[name]-[hash].js",
                },
            },
        },
    },
});
