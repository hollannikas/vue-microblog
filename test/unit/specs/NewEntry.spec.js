import Vue from 'vue'
import NewEntry from '@/components/NewEntry'
import * as shinon from 'sinon'
import moment from 'moment'

// FIXME duplicate code
Vue.filter('date', function (date) {
  if (date) {
    return moment(String(date)).format('DD/DD/YYYY hh:mm')
  }
})

describe('NewEntry.vue', () => {
  it('should render', () => {
    const Constructor = Vue.extend(NewEntry)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#message-label').textContent)
      .to.equal('Message:')
  })

  it('should send an event with a new blog entry', () => {
    const Constructor = Vue.extend(NewEntry)
    const vm = new Constructor().$mount()

    const spy = shinon.spy()
    vm.$on('new-message', spy)

    const message = 'testmessage'
    vm.message = message

    vm.sendMessage()

    expect(spy).to.have.been.calledWith(message)
  })
})
