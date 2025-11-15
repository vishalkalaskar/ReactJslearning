import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
//https://vite.dev/config/
export default defineConfig({
 plugins: [
    react(),
    federation({
      name: 'Host-app',
      filename: 'remoteEntry.js',
      exposes: {
		 // Replace with your actual module paths
        './App': './src/App',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
   server: {
    port: 3008,
  },
})
