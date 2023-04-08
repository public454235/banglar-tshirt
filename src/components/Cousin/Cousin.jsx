import React from 'react';
import Friends from '../Friends/Friends';


const Cousin = ({children, hasFriends, ring}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriends && <Friends ring={ring}></Friends>}
            
            
        </div>
    );
};

export default Cousin;