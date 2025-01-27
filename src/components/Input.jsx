import { useState } from 'react';

export default function Input({label})
{
    const [inputData, setInputData] = useState(0);

    function handleChange(e)
    {
        setInputData(oldData => e.target.value);
    }

    return (
        <div id="user-input">
            <label htmlFor={label}>{label}</label>
            <input type="number" name={label} id={label} onChange={handleChange} value={inputData} required/>
        </div>
    )
}