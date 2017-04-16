<template>
  <div>
    <label for="message">Message:</label>
    <textarea v-model="message" id="message"></textarea>
    <button v-on:click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  name: 'new-entry',
  data () {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage: function () {
      this.$emit('new-message', this.message)
      this.message = ''
    }
  }
}
</script>

