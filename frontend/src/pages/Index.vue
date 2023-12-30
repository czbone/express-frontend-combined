<template>
  <QPage class="row justify-center" padding>
    <div class="contents">
      <h2>メモリスト</h2>
      <QList class="rounded-borders q-mb-lg" bordered separator>
        <QItem v-for="(note, index) in notes" :key="index">
          <QItemSection>{{ note.message }}</QItemSection>
          <QItemSection side>
            <QBtn color="negative" @click="removeNote(note.id)">削除</QBtn>
          </QItemSection>
        </QItem>
      </QList>
      <div class="row q-mb-lg">
        <QInput
          class="col"
          v-model="newNote"
          placeholder="メモを入力"
          outlined
          @keyup.enter="addNote"
        />
        <QBtn color="primary" label="追加" @click="addNote" />
      </div>
    </div>
  </QPage>
</template>
<script setup lang="ts">
import { useNoteStore } from '@/stores/note'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const newNote = ref('')
const noteStore = useNoteStore()
const { notes } = storeToRefs(noteStore)
noteStore.getAll()

const addNote = () => {
  if (newNote.value.trim()) {
    noteStore.addNote(newNote.value)
    newNote.value = ''
  }
}
const removeNote = (id: string) => {
  noteStore.removeNote(id)
}
</script>
<style scoped>
.contents {
  width: 500px;
}
</style>
