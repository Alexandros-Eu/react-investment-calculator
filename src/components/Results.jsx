import { formatter } from '../util/investment';

export default function Results({annualData})
{
    let totalInterest = 0;

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody className="center">
                {annualData.map((el) => {
                    return <tr key={el.year}>
                        <td>{el.year}</td>
                        <td>{formatter.format(el.valueEndOfYear)}</td>
                        <td>{formatter.format(el.interest)}</td>
                        <td>{formatter.format(totalInterest += el.interest)}</td>
                        <td>{formatter.format(el.valueEndOfYear - totalInterest)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}