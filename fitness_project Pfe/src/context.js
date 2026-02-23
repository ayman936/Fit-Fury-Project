// ProgramContext.js
import React, { createContext, useState } from 'react';

export const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
    const [selectedProgram, setSelectedProgram] = useState('');

    return (
        <ProgramContext.Provider value={{ selectedProgram, setSelectedProgram }}>
            {children}
        </ProgramContext.Provider>
    );
};
