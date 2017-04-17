import Vue from 'vue'
import Blogs from '@/components/Blogs'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue) // TODO is this the right place?

describe('Blogs.vue', () => {
  it('should contain new entry', () => {
    const Constructor = Vue.extend(Blogs)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('#new-entry').length).to.equal(1)
  })

  it('should show contain entry list', () => {
    const Constructor = Vue.extend(Blogs)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('#entry-list').length).to.equal(1)
  })

  it('should add a new entry', () => {
    const Constructor = Vue.extend(Blogs)
    const vm = new Constructor().$mount()

    const message = 'testMessage'
    vm.newMessage(message)
    expect(vm.entries.filter((msg) => msg.message === message).length).to.equal(1)
  })
})
