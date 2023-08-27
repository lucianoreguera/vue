import { mount } from "@vue/test-utils"
import PropExample from '@/components/PropExample.vue'

describe('PropExample', () => {
    it('the componente receiver and show title and content props', () => {
        const wrapper = mount(PropExample, {
            props: {
                title: 'Hello World',
                content: 'Lorem ipsum'
            }
        })
        
        if (expect(wrapper.find('h3').exists)) {
            expect(wrapper.find('h3').text()).toBe('Hello World')
        }

        if (expect(wrapper.find('p').exists())) {
            expect(wrapper.find('p').text()).toBe('Lorem ipsum')
        }
    })

    it('the component emit the counter value', async () => {
        const wrapper = mount(PropExample)
        await wrapper.find('button').trigger('click')

        // console.log(wrapper.emitted())
        expect(wrapper.emitted().clickMe[0][0]).toBe(1)
    })
})