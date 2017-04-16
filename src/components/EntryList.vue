<template>
  <div>
    <ul>
      <li v-for="entry in entries">
        {{entry.message}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'entry-list',
  props: ['entries']
}
</script>

