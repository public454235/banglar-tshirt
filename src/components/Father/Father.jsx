import React from 'react';
import My from '../My/My';
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother';

const Father = ({ring}) => {
    return (
        <div>
            <h3>Father</h3>
            <section className='flex'>
                <My ring={ring}></My>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Father;