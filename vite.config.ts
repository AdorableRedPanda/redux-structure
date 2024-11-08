import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from "path";

export default defineConfig({
    base: '',
    plugins: [ react() ],
    build: {
        outDir: '../dist',
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, './src'),
        },
    },
    root: './src/',
    server: {
        open: true,
        port: 8080
    }
});
