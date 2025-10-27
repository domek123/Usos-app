import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "node:path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@components': path.resolve(__dirname, './src/components'),
            '@router': path.resolve(__dirname, './src/router'),
            '@context': path.resolve(__dirname, './src/context'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
        },
    },
})
