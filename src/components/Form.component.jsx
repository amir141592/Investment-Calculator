import { useState } from "react";

const INITIAL_FORM_VALUES = { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 };

export default function Form() {
	const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);

	// ? this way we clone current values and overwrite new values
	function handleUserInput(input, value) {
		setFormValues((curFormValues) => ({
			...curFormValues,
			[input]: value,
		}));
	}

	return (
		<form id="inputs-form">
			<div className="user-input">
				<label htmlFor="initial-investment">Initial Investment</label>
				<input
					type="tel"
					id="initial-investment"
					value={formValues.initialInvestment}
					// ? for using event, we must get event as an argument
					// ? for passing parameters to a function in our template we use an anonymous function
					onInput={(event) => handleUserInput("initialInvestment", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="annual-investment">Annual Investment</label>
				<input
					type="tel"
					id="annual-investment"
					value={formValues.annualInvestment}
					onInput={(event) => handleUserInput("annualInvestment", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="expected-return">Expected Return</label>
				<input
					type="tel"
					id="expected-return"
					value={formValues.expectedReturn}
					onInput={(event) => handleUserInput("expectedReturn", event.target.value)}
					required
				/>
			</div>
			<div className="user-input">
				<label htmlFor="duration">Duration</label>
				<input
					type="tel"
					id="duration"
					value={formValues.duration}
					onInput={(event) => handleUserInput("duration", event.target.value)}
					required
				/>
			</div>
		</form>
	);
}
