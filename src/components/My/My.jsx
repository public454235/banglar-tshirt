import React from 'react';
import Special from '../Special/Special';

const My = ({ring}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default My;