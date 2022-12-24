import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";



describe('Pruebas en <LoginPage/>', () => { 
    
    const user = { id: 123, name: 'Juan', email: 'juan@google.com' };

    test('Debe de llamar el componente sin el usuario', () => {
        render(
            <UserContext.Provider value={{user: null, setUser: () => {}}}>
                <LoginPage />
            </UserContext.Provider>
        );


        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML.trim()).toBe('null');
    });

    test('Debe de llamar el setUser ', () => {
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )


        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalled();
        expect(setUserMock).toHaveBeenCalledWith(user);
    })

});