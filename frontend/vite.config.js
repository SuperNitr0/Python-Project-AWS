import { defineConfig } from 'vite';

export default defineConfig({
  root: './frontend',  // Ensure this is pointing to the correct directory
  build: {
    outDir: 'dist',     // Output directory for the build
  },
});
