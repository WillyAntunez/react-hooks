import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);

    const incrementFather = useCallback((value) => {
        setCounter((c) => c + value);
    }, []);

    return (
        <>
            <h1>UseCallback Hook: {counter}</h1>
            <ShowIncrement increment={incrementFather} />
        </>
    );
};
