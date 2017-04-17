<template>
  <div class="container-fluid">
    <new-entry v-on:new-message="newMessage"></new-entry>
    <entry-list :entries="entries"></entry-list>
  </div>
</template>

<script>
import EntryList from './EntryList.vue'
import NewEntry from './NewEntry.vue'
import moment from 'moment'
import axios from 'axios'

const API_URI = `http://localhost:3000/api/microblogs`

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
      const entry = {message: message, date: moment().format(), user: 'default-user'}
      this.entries.push(entry)
      axios.post(API_URI, entry)
        .then(response => {})
        .catch(e => console.log(e))
    },
    getEntries: function () {
      axios.get(API_URI)
        .then(response => {
          this.entries = response.data
        })
        .catch(e => console.log(e))
    }
  },
  mounted () {
    this.getEntries()
  }
}
</script>

