import Header from './components/Header';
import Input from './components/Input';
import Results from './components/Results';

function App() {
  return (
    <div>
        <Header/>
        <div className="input-group">
          <Input label="INITIAL INVESTMENT"/>
          <Input label="ANNUAL INVESTMENT"/>
        </div>
        <div className="input-group">
          <Input label="EXPECTED RETURN"/>
          <Input label="DURATION"/>
        </div>
        <Results/>
    </div>
  )
}

export default App
