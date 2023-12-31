import { NextFunction, Request, RequestHandler, Response } from 'express'

type Note = {
  id: string
  message: string
}

class NoteController {
  notes: Array<Note>
  constructor() {
    this.notes = [
      { id: '0001', message: 'サンプル1' },
      { id: '0002', message: 'サンプル2' }
    ]
  }
  list: RequestHandler = (req: Request, res: Response, _next: NextFunction) => {
    res.json(this.notes)
  }
  create: RequestHandler = (req: Request, res: Response, _next: NextFunction) => {
    const { message } = req.body as Note

    let randomId: string
    for (;;) {
      randomId = Math.random().toString(36).slice(-8) // 文字列長8
      const index = this.notes.findIndex((note) => note.id === randomId)
      if (index === -1) break
    }

    const note: Note = {
      id: randomId,
      message: message
    }
    this.notes.push(note)

    res.json()
  }
  delete: RequestHandler = (req: Request, res: Response, _next: NextFunction) => {
    const noteId = req.params.id
    const index = this.notes.findIndex((note) => note.id === noteId)
    if (index === -1) {
      res.status(400).json({ message: 'IDが不正です' })
      return
    }

    this.notes.splice(index, 1)
    res.json()
  }
}
export default new NoteController()
