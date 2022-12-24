import { useEffect, useState } from 'react';

import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'Willy',
        email: 'willy@google.com',
    });

    const { username, email } = formState;

    const onInputChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <>
            <h1>Simple form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="fernando@google.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {username === 'strider2' && <Message />}
        </>
    );
};
