import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default ({ mode }) => {
  // 環境変数(VITE_XXXXX)をvite.config.tsに読み込む
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      quasar({
        autoImportComponentCase: 'pascal',
        sassVariables: 'src/styles/quasar-variables.sass'
      })
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      port: 3001,
      proxy: {
        '/api': {
          target: env.VITE_BACKEND_SERVER_URL
        }
      }
    },
    preview: {
      port: 3001
    }
  })
}
