import axios from 'axios'
import { defineStore } from 'pinia'
import config from '@/config'

type Note = {
  id: string
  message: string
}

export const useNoteStore = defineStore('note', {
  state: () => {
    return {
      notes: [] as Note[]
    }
  },
  actions: {
    async addNote(message: string) {
      try {
        await axios.post(config.api_note, {
          message: message
        })

        // 一覧再取得
        this.getAll()
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err)
        }
      }
    },
    async removeNote(id: string) {
      try {
        await axios.delete(config.api_note + `/${id}`)

        // 一覧再取得
        this.getAll()
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err)
        }
      }
    },
    async getAll() {
      try {
        const response = await axios.get(config.api_note)
        this.notes = response.data
      } catch (err) {
        if (axios.isAxiosError(err)) {
          console.log(err)
        }
      }
    }
  }
})
