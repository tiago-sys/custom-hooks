import React, { useState } from 'react';

export const useForm = ( initialForm = {} ) => {
	
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value // Propiedades computadas de objetos
		});
	}

	const onResetForm = () => {
		setFormState(initialForm);
	}

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
 	};
}
