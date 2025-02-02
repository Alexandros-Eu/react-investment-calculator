export default function UserInput({onChangeInput, userInput})
{
    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investment</label>
                <input type="number" onChange={(event) => onChangeInput("initialInvestment", event.target.value)}  value={userInput.initialInvestment} required/>
            </p>
            <p>
                <label htmlFor="">Annual Investment</label>
                <input type="number" onChange={(event) => onChangeInput("annualInvestment", event.target.value)} value={userInput.annualInvestment} required/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" onChange={(event) => onChangeInput("expectedReturn", event.target.value)} value={userInput.expectedReturn} required/>
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" onChange={(event) => onChangeInput("duration", event.target.value)} value={userInput.duration} required/>
            </p>
        </div>
    </section>
}