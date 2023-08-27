import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
    it('the component render the initial state', () => {
        const wrapper = mount(App)
        if (expect(wrapper.find('h2').exists()))
            expect(wrapper.find('h2').text()).toBe('Counter')

        if (expect(wrapper.find('#counter').exists()))
            expect(wrapper.find('#counter').text()).toBe('0')

        if (expect(wrapper.find('button').exists()))
            expect(wrapper.find('button').text()).toBe('+')
    })

    it('the + button incremet one to counter', async () => {
        const wrapper = mount(App)
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('#counter').text()).toBe('1')
    })
})
