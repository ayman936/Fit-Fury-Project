import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Pricing from './pricing/Pricing';
import BulkingProgram from './bulk/BulkingProgram';
import CutingProgram from './cut/CutingProgram';
import MacroCalculator from './MacroCalculator/MacroCalculator';
import CutAdvice from './cut/CutAdvice';
import BulkAdvice from './bulk/BulkAdvice';
import Product from './Products/Pruduct';
import Cart from './cart/cart';
import FormOrder from './Forms/FormOrder';
import CoachingForm from './Forms/CochingForm';
import { ProgramProvider } from './context';

function App() {
  return (
    <ProgramProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/Pricing' element={<Pricing />} />
          <Route path='/BulkingProgram' element={<BulkingProgram />} />
          <Route path='/CutingProgram' element={<CutingProgram />} />
          <Route path='/MacroCalculator' element={<MacroCalculator />} />
          <Route path='/CutAdvice' element={<CutAdvice />} />
          <Route path='/BulkAdvice' element={<BulkAdvice />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/FormOrder' element={<FormOrder />} />
          <Route path='/CoachingForm' element={<CoachingForm />} />
        </Routes>
      </Router>
    </ProgramProvider>
  );
}

export default App;
