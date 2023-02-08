import daybookRouter from '@/modules/daybook/router'


describe('Pruebas del Daybook Router', () => {

    test('el router debe de tener esta configuracion', () => {
        // console.log(daybookRouter);
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children: [
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component: expect.any(Function),
                    props: expect.any(Function)
                },
            ]
        })// fin del expect
    }) // fin del test
})// fin del describe