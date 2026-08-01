import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/Media-Informasi-Galung-Maloang/', // Menjadikan path aset sesuai dengan nama repository GitHub Pages
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profil: resolve(__dirname, 'profil.html')
      }
    }
  }
})
