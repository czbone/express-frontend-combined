import { NoteController } from '@/controllers'
import { Router } from 'express'

const router = Router()

router.get('/', NoteController.list) // 一覧取得
router.post('/', NoteController.create) // 登録
router.delete('/:id', NoteController.delete) // 削除

export default router
