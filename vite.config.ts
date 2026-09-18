import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite's config runs in Node. Declared locally so the project does not
// need @types/node just to read one variable.
declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  plugins: [react()],
  server: {
    // The desktop preview launcher assigns a port through PORT; Vite
    // does not read that variable on its own.
    port: Number(process.env.PORT) || 5180,
    strictPort: true,
  },
});
