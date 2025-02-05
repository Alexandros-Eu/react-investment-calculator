import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results';
import { calculateInvestmentResults } from './util/investment.js';
import { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: ""
  });
  
  const validInput = inputData.duration > 0;

  function handleChange(e)
  {
    // switch(e.target.name)
    // {
    //   case "INITIAL INVESTMENT":
    //     setInputData(oldData => {
    //       return {...oldData, initialInvestment: parseInt(e.target.value)}
    //     })
    //     break;

    //   case "ANNUAL INVESTMENT":
    //     setInputData(oldData => {
    //       return {...oldData, annualInvestment: parseInt(e.target.value)}
    //     })
    //     break;

    //   case "EXPECTED RETURN":
    //     setInputData(oldData => {
    //       return {...oldData, expectedReturn: parseInt(e.target.value)}
    //     })
    //     break;

    //   case "DURATION":
    //     e.target.value < 1 ? alert("You have entered an invalid duration.") :
    //       setInputData(oldData => {
    //         return { ...oldData, duration: parseInt(e.target.value) }
    //       })
    //     break;
    // }

    setInputData(oldData => {
      return {...oldData, [e.target.name]: parseInt(e.target.value)}
    })
  }


  return (
    <div>
        <Header/>
        <section id="user-input">
          <div className="input-group">
            <Input label="INITIAL INVESTMENT" name="initialInvestment" onInput={handleChange} value={inputData.initialInvestment}/>
            <Input label="ANNUAL INVESTMENT" name="annualInvestment" onInput={handleChange} value={inputData.annualInvestment} />
          </div>
          <div className="input-group">
            <Input label="EXPECTED RETURN" name="expectedReturn" onInput={handleChange} value={inputData.expectedReturn} />
            <Input label="DURATION" name="duration" onInput={handleChange} value={inputData.duration} />
          </div>
        </section>
        {!validInput && <p className="center">You have entered an invalid duration.</p>}
        {validInput && <Results annualData={calculateInvestmentResults(inputData)}/>} 
    </div>
  )
}

export default App
