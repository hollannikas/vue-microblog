import Vue from 'vue'
import EntryList from '@/components/EntryList'
import moment from 'moment'

const entries = [
  {message: 'msg1', date: moment().format(), user: 'test-user'},
  {message: 'msg2', date: moment().format(), user: 'test-user'}
]

describe('EntryList.vue', () => {
  it('should render one unordered list', () => {
    const Constructor = Vue.extend(EntryList)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('ul').length).to.equal(1)
  })

  it('should show a list of entries', () => {
    const Constructor = Vue.extend(EntryList)
    const vm = new Constructor({propsData: {entries: entries}}).$mount()
    expect(vm.$el.querySelectorAll('li').length).to.equal(2)
  })
})
