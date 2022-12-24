import { renderHook, act } from '@testing-library/react';
import { useForm } from '../../src/hooks/useForm';

const initialForm = {
    name: 'Fernando',
    email: 'fernando@email.com',
};

describe('Pruebas sobre el useForm', () => {
    test('Debe de regresar la información por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));

        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test('Debe de cambiar el nombre del formulario', () => {
        const newValue = 'Willy';

        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
        });

        expect(result.current.formState).toEqual({
            name: newValue,
            email: initialForm.email,
        });
    });

    test('Debe de realizar el reset del formulario', () => {
        const newValue = 'Willy';

        const { result } = renderHook(() => useForm(initialForm));
        const { formState, onInputChange, onResetForm } = result.current;

        act(() => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm();
        });

        expect(result.current.formState).toEqual({
            name: initialForm.name,
            email: initialForm.email,
        });
    });
});
