import { createContext, useState } from 'react';

const PlanContext = createContext();

const PlanProvider = ({ children }) => {
  const [selectedPlan, setSelectedPlan] = useState('');

  return (
    <PlanContext.Provider value={{ selectedPlan, setSelectedPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export { PlanProvider, PlanContext };