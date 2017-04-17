<template>
  <div id="new-entry">
    <div class="form-group">
      <label id="message-label" for="message" class="col-2 col-form-label">Message:</label>
      <textarea v-model="message" id="message" class="form-control" rows="3"></textarea>
      <b-button id="send-button" v-on:click="sendMessage" variant="primary">Send</b-button>
    </div>
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

