import { defineStore } from 'pinia'

export const useNoteStore = defineStore('note', {
  state: () => ({
    notes: ['サンプル1', 'サンプル2']
  }),
  actions: {
    addNote(note: string) {
      this.notes.push(note)
    },
    removeNote(index: number) {
      this.notes.splice(index, 1)
    }
  }
})
