import { formatter } from "../util/investment";

export default function Form({ onUserInput, formValues }) {
	return (
		<form id="inputs-form">
			<div className="user-input">
				<label htmlFor="initial-investment">Initial Investment</label>
				<input
					type="tel"
					id="initial-investment"
					value={formatter.format(formValues.initialInvestment)}
					// ? for using event, get event as an argument
					// ? for passing parameters to a function in the template, use an anonymous function
					onInput={(event) => onUserInput("initialInvestment", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="annual-investment">Annual Investment</label>
				<input
					type="tel"
					id="annual-investment"
					value={formatter.format(formValues.annualInvestment)}
					onInput={(event) => onUserInput("annualInvestment", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="expected-return">Expected Return</label>
				<input
					type="tel"
					id="expected-return"
					value={formatter.format(formValues.expectedReturn)}
					onInput={(event) => onUserInput("expectedReturn", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="duration">Duration (Year)</label>
				<input
					type="tel"
					id="duration"
					value={formValues.duration}
					onInput={(event) => onUserInput("duration", event.target.value)}
					required
				/>
			</div>
		</form>
	);
}
