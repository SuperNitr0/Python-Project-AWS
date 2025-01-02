import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',  // Make sure this points to the correct root folder
  build: {
    outDir: '../dist',  // Output folder for the build
  },
});
