/*
  Path: vite.config.js
  Description: Vite configuration for the React application build and dev server.
  Author: Richard Anderson
  Last Updated: 03-October-2026.
  Version: 1.0.0
  Note: Provides the project build and local development settings.
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  server: {
    port: 3000,
    host: '0.0.0.0',
    open: true
  },
  build: {
    target: 'esnext',
    outDir: 'build'
  },
  resolve: {
    alias: {
      '@': resolve(import.meta.dirname, 'src'),
    },
  }
});