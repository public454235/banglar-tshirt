import React, { useContext } from 'react';
import { MonyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [manys] = useContext(MonyContext)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>Manys: {manys}</small></p>
        </div>
    );
};

export default Sister;