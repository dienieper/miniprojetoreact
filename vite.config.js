import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const repositoryName = globalThis.process?.env?.GITHUB_REPOSITORY?.split('/')[1]
const isUserPagesSite = repositoryName?.endsWith('.github.io')

export default defineConfig({
  plugins: [react()],
  base: repositoryName && !isUserPagesSite ? `/${repositoryName}/` : '/',
})
