import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: './', // Menjadikan path aset relatif agar berfungsi di GitHub Pages (subfolder)
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        profil: resolve(__dirname, 'profil.html')
      }
    }
  }
})
