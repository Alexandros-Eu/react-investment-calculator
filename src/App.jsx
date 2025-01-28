import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState([0, 0, 0, 0]);

  function handleChange(e)
  {
    setInputData((oldData => {
      if(e.target.name === "INITIAL INVESTMENT")
      {
        oldData[0] = e.target.value;
        return [...oldData];
      }

      if(e.target.name === "ANNUAL INVESTMENT")
      {
        oldData[1] = e.target.value;
        return [...oldData];
      }

      if(e.target.name === "EXPECTED RETURN")
      {
        oldData[2] = e.target.value;
        return [...oldData];
      }

      if(e.target.name === "DURATION")
      {
        oldData[3] = e.target.value;
        return [...oldData];
      }


    }))
  }


  return (
    <div>
        <Header/>
        <div className="input-group">
          <Input label="INITIAL INVESTMENT" onInput={handleChange} value={inputData[0]}/>
          <Input label="ANNUAL INVESTMENT" onInput={handleChange} value={inputData[1]}/>
        </div>
        <div className="input-group">
          <Input label="EXPECTED RETURN" onInput={handleChange} value={inputData[2]}/>
          <Input label="DURATION" onInput={handleChange} value={inputData[3]}/>
        </div>
        <Results/>
    </div>
  )
}

export default App
