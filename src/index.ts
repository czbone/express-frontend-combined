import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import router from './routes'

// 環境変数読み込み(.envファイル)
dotenv.config()

const port = process.env.SERVER_PORT
const app = express()

app.use(express.json())

// フロントエンドをルーティング
// ***** ここから *****
app.use(express.static(path.resolve(__dirname, '../frontend/dist'))) // フロントエンドモジュールが存在しない場合はエラー(500)を表示
app.use((req, res, next) => {
  if (req.originalUrl.startsWith('/api')) {
    next()
  } else {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'))
  }
})
// ***** ここまで *****

// APIをルーティング
app.use('/api', router)

// サーバ起動
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`)
})
