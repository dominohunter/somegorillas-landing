import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  
  // Build optimizations
  build: {
    // Generate source maps for debugging
    sourcemap: true,
    
    // Minimize output
    minify: 'esbuild',
    
    // Code splitting configuration
    rollupOptions: {
      output: {
        // Separate vendor chunks
        manualChunks: {
          vendor: ['gsap', 'lenis'],
          ui: ['./src/components/interactions.js', './src/components/translator.js']
        },
        
        // Asset naming for better caching
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          let extType = info[info.length - 1];
          
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (/woff2?|eot|ttf|otf/i.test(extType)) {
            extType = 'fonts';
          }
          
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    
    // Tree shaking
    target: 'esnext',
    
    // Asset optimization
    assetsInlineLimit: 4096, // 4kb
  },
  
  // Dev server optimizations
  server: {
    // Enable file system caching
    fs: {
      strict: false,
    },
  },
  
  // CSS optimization
  css: {
    devSourcemap: true,
  },
  
  // Optimizations
  optimizeDeps: {
    include: ['gsap', 'lenis'],
  },
  
  // Enable modern JS features
  esbuild: {
    target: 'es2020',
  },
});
