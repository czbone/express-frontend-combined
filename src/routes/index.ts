import { Router } from 'express'
import noteRouter from './note'

const router = Router()
router.use('/note', noteRouter)
export default router
