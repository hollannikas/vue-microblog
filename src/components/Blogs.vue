<template>
  <div>
    <new-entry v-on:new-message="newMessage"></new-entry>
    <entry-list :entries="entries"></entry-list>
  </div>
</template>

<script>
import EntryList from './EntryList.vue'
import NewEntry from './NewEntry.vue'

export default {
  name: 'blogs',
  components: {
    EntryList,
    'entry-list': EntryList,
    'new-entry': NewEntry
  },
  data () {
    return {
      entries: []
    }
  },
  methods: {
    newMessage: function (message) {
      this.entries.push({message: message, date: 'date', user: 'default-user'})
    }
  }
}
</script>

