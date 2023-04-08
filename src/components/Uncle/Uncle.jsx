import React, { useContext } from 'react';
import Cousin from '../Cousin/Cousin';
import { MonyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [many, setMany] = useContext(MonyContext)
    return (
        <div>
            <h3>Uncle</h3>
            <p><small>Grandpa Many: {many}</small></p>
            <button onClick={()=> setMany(many + 1000)}>Send 1000tk</button>
            <section className='flex'>
                <Cousin>Nabil</Cousin>
                <Cousin>Nabila</Cousin>
            </section>
        </div>
    );
};

export default Uncle;