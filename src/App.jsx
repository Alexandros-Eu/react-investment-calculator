import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results';
import { calculateInvestmentResults } from './util/investment.js';
import { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
  });

  function handleChange(e)
  {
    setInputData((oldData => {
      if(e.target.name === "INITIAL INVESTMENT")
      {
        return {...oldData, initialInvestment: parseInt(e.target.value)}
      }

      if(e.target.name === "ANNUAL INVESTMENT")
      {
        return {...oldData, annualInvestment: parseInt(e.target.value)}
      }

      if(e.target.name === "EXPECTED RETURN")
      {
        return {...oldData, expectedReturn: parseInt(e.target.value)}
      }

      if(e.target.name === "DURATION")
      {
        return {...oldData, duration: parseInt(e.target.value)}
      }
    }))


  }


  return (
    <div>
        <Header/>
        <div className="input-group">
          <Input label="INITIAL INVESTMENT" onInput={handleChange} value={inputData.initialInvestment}/>
          <Input label="ANNUAL INVESTMENT" onInput={handleChange} value={inputData.annualInvestment}/>
        </div>
        <div className="input-group">
          <Input label="EXPECTED RETURN" onInput={handleChange} value={inputData.expectedReturn}/>
          <Input label="DURATION" onInput={handleChange} value={inputData.duration}/>
        </div>
        <Results annualData={calculateInvestmentResults(inputData)}/>
    </div>
  )
}

export default App
