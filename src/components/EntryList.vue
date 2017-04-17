<template>
  <div id="entry-list" class="row">
    <ul class="list-group">
      <li v-for="entry in entries" class="list-group-item">
        <small class="text-muted">{{entry.date | date}} @{{entry.user}}:&nbsp;</small>
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

