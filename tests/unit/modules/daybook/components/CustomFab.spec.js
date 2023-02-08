import { shallowMount } from '@vue/test-utils'
import CustomFab from '../../../../../src/modules/daybook/components/CustomFab.vue'

describe('Pruebas en el CustomFAB', () => {
    test('debe de mostrar el icono por defecto', () => {
        // fa-plus
        const wrapper = shallowMount(CustomFab)
        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-save')).toBeTruthy()
    })

    test('debe de mostrar el icono por argumento: fa-circle', () => {
        // fa-circle
        const wrapper = shallowMount(CustomFab,{
            props: {
                icon: 'fa-circle'
            }
        })

        const iTag = wrapper.find('i')

        expect(iTag.classes('fa-circle')).toBeTruthy()

    })

    test('debe de mostrar el icono por defecto', () => {

        // wrapper.emmitted('on:click')
        const wrapper = shallowMount(CustomFab)
        wrapper.find('button').trigger('click')
        console.log(wrapper.emitted());

        // expect(wrapper.emmitted('on:click')).toHaveLength(1)


    })

})