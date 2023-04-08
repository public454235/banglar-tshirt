import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
import Aunty from '../Aunty/Aunty';
export const RingContext = createContext('gold')
export const MonyContext = createContext(0)

const Grandpa = () => {
    const ring = 'diamond'
    const [many, setMany] = useState(0)

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>Has Many: {many}</p>
            <MonyContext.Provider value={[many, setMany]}>
                <RingContext.Provider value='golden Ring'>
                    <section className='flex'>

                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </RingContext.Provider>
            </MonyContext.Provider>
        </div>
    );
};

export default Grandpa;