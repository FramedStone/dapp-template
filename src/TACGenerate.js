import React, { createContext, useState } from 'react';

export const TACGenerate = createContext();

export const TACProvider = ({ children }) => {
    const [generatedTAC, setGeneratedTAC] = useState('');
     // eslint-disable-next-line
    const [tacRequested, setTacRequested] = useState(false);
    // const [setTacRequested] = useState(false);

    const handleTacRequest = () => {
        const newTAC = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        setGeneratedTAC(newTAC);
        setTacRequested(true);
        console.log(`Generated TAC: ${newTAC}`); // Debugging
    };

    return (
        <TACGenerate.Provider value={{ generatedTAC, handleTacRequest }}>
            {children}
        </TACGenerate.Provider>
    );
};

