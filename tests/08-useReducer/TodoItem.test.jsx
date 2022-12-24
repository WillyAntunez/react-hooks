import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Pruebas en <TodoItem />', () => {
    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el todo pendiente de completar', () => {
        render(
            <TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />
        );

        const liElement = screen.getByRole('listitem');

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.classList.contains('align-self-center')).toBeTruthy();
        expect(spanElement.classList.contains('text-decoration-line-through')).toBeFalsy();
    });

    test('Debe de mostrar el todo completado', () => {
        todo.done = true;

        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through');
    });

    test('Span debe de llamar el ToggleTodo cuando se hace click', () => {
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalled();
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    });

    test('El boton debe de llamar el deleteTodo', () => {
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(onDeleteTodoMock).toHaveBeenCalled();
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });

});
