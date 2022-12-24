import { memo } from 'react';

export const Small = memo(({ value }) => {
    console.log('me volvi a dibujar :c');

    return <small>{value}</small>;
});
