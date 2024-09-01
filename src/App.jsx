import { useState } from "react";

import Form from "./components/Form.component";
import Header from "./components/Header.component";
import ResultTable from "./components/ResultTable.component";

const INITIAL_FORM_VALUES = { initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 };

function App() {
	const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
	const inputIsValid = formValues.duration > 0;

	// ? this way we clone current values and overwrite new values
	function handleUserInput(input, value) {
		setFormValues((curFormValues) => ({
			...curFormValues,
			[input]: Number(value.replace(/[$,]/g, "")),
		}));
	}

	return (
		<>
			<Header />
			<Form
				onUserInput={handleUserInput}
				formValues={formValues}
			/>
			{inputIsValid ? <ResultTable formValues={formValues} /> : <p className="center">Please enter a duration greater than 0</p>}
		</>
	);
}

export default App;
