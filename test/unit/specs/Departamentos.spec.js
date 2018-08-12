import Vue from 'vue'
import Departamentos from '@/components/Departamentos'

describe('Departamentos.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Departamentos)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.departamentos h1').textContent).toEqual(
      'Departamentos'
    )
  })
})
