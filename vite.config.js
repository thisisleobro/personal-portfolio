import { defineConfig } from "vite";
import githubRepos from './src/vite-plugin-github-repos'

export default defineConfig({
  // config options
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
  plugins: [
    githubRepos()
  ],
})