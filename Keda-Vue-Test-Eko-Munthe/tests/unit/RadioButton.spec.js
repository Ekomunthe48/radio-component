import { shallowMount, mount } from '@vue/test-utils'
import Home from '../../src/views/Home.vue'
import Detail from '../../src/components/Detail.vue'
import RadioButton from '../../src/components/RadioButton.vue'

describe('Home.vue Test', () => {
  it('Should render the page Home Correctly', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.exists()).toBe(true)
  })
})

describe('Detail.vue Test', () => {
  it('Should render the Detail component correctly', () => {
    const wrapper = shallowMount(Detail)
    expect(wrapper.exists()).toBe(true)
  })

  it('Should render radiobutton text correctly', async () => {
    const wrapper = mount(Detail)
    expect(wrapper.text()).toContain('Text Field')
    expect(wrapper.text()).toContain('Date Field')
    expect(wrapper.text()).toContain('Other Field')
  })
})

describe('RadioButton.vue Test', () => {
  it('Should render the radio button component correctly', () => {
    const wrapper = shallowMount(RadioButton)
    expect(wrapper.exists()).toBe(true)
  })

  it('Should render radiobutton element correctly', () => {
    const wrapper = shallowMount(RadioButton)
    expect(wrapper.text())
  })
})
