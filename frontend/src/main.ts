import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarLang from 'quasar/lang/ja' // 日本語対応

// CSS読み込み
import '@quasar/extras/material-icons/material-icons.css' // アイコンフォント
import 'quasar/src/css/index.sass' // Quasar CSS

import App from './App.vue'
import router from './router'

// アプリケーション作成
const app = createApp(App)

// 言語、プラグイン追加
app.use(Quasar, {
  lang: quasarLang,
  plugins: {} // プラグイン
})

// Pinia初期化
app.use(createPinia())

// ルータ初期化
app.use(router)

// index.htmlに連結
app.mount('#app')
