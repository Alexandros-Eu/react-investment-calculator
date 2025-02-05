export default function Input({label, onInput, value})
{
    return (
        <p>
            <label htmlFor={label}>{label}</label>
            <input type="number" name={label} id={label} onChange={onInput} value={value} required/>
        </p>
    )
}