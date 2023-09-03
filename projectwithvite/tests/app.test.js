import App from '../src/App.vue'
import { mount } from '@vue/test-utils'

describe('App.vue', () => {
    it('the component render initial state', () => {
        const wrapper = mount(App)
        
        if (expect(wrapper.find('p')).exists()) {
            expect(wrapper.text()).toBe('0')
        }
    }),
    
    it('the increment button add ones to counter', async() => {
        const wrapper = mount(App)
        await wrapper.find('#increment').trigger('click')
        expect(wrapper.find('p').text()).toBe('1')
    })
})