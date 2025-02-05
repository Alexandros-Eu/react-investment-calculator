export default function Input({label, name, onInput, value})
{
    return (
        <p>
            <label htmlFor={label}>{label}</label>
            <input type="number" name={name} id={label} onChange={onInput} value={value} required/>
        </p>
    )
}