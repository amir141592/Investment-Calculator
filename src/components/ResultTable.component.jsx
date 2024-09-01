import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({ formValues }) {
	const years = calculateInvestmentResults(formValues);
	const initialInvestment = formValues.initialInvestment;

	return (
		<table id="result">
			<thead>
				<tr>
					<th>year</th>
					<th>investment value</th>
					<th>interest</th>
					<th>total</th>
					<th>invested capital</th>
				</tr>
			</thead>
			<tbody>
				{years.map(({ year, interest, valueEndOfYear, annualInvestment }) => (
					<tr key={year}>
						<td>{year}</td>
						<td>{formatter.format(valueEndOfYear)}</td>
						<td>{formatter.format(interest)}</td>
						<td>{formatter.format(valueEndOfYear - annualInvestment * year - initialInvestment)}</td>
						<td>{formatter.format(valueEndOfYear - (valueEndOfYear - annualInvestment * year - initialInvestment))}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
