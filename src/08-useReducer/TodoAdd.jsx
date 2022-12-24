import React, { useState } from 'react';

export const TodoAdd = ({ onNewTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 0) {
            const newTodo = {
                id: new Date().getTime(),
                description: inputValue,
                done: false,
            };

            onNewTodo(newTodo);
        }
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                value={inputValue}
                onChange={onInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
                Agregar
            </button>
        </form>
    );
};
