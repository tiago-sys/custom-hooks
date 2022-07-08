import React, {useEffect, useState} from 'react';

export const useFetch = (url) => {

	const [state, setState] = useState({
		data: null,
		isLoading: true,
		hasError: null,
	});

	const getFetch = async () => {

		setState({
			...state,
			isLoading: true,
		})

		const resp = await fetch(url);
		const data = await resp.json();

		setState({
			data, // Lo mismo que poner 'data: data' ya que tienen el mismo nombre
			isLoading: false,
			hasError: null,
		});
	}


	useEffect(() => {
		getFetch();
	}, [url]);



	return {
		data:      state.data, 
		isLoading: state.isLoading,
		hasError:  state.hasError,
	};
}