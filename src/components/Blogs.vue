<template>
  <div>
    <entry-list :entries="entries"></entry-list>
  </div>
</template>

<script>
import EntryList from './EntryList.vue'

export default {
  name: 'blogs',
  components: {
    EntryList,
    'entry-list': EntryList
  },
  data () {
    return {
      entries: [ {message: 'first posting', date: 'date', user: 'default-user'} ]
    }
  }
}
</script>

