export default function Input({label, onInput, value})
{
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <input type="number" name={label} id={label} onChange={onInput} value={value} required/>
        </div>
    )
}