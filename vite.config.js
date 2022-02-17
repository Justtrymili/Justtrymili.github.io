import { defineConfig } from 'vite'
import three from '@vitejs/plugin-vanilla'


export default defineConfig({
        base: '/Justtrymili.github.io/',
        plugins:[three()]
})

