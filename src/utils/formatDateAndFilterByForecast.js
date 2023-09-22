/* export const formatDateAndFilterByForecast = data => {
	const finalObj = data[1].list.reduce((result, item) => {
		const dates = item.dt_txt.split(' ', 1);
		if (!result[dates]) {
			result[dates] = [];
		}
		result[dates].push(item);
		return result;
	}, {});

	return finalObj;
};
 */

export const formatDateAndFilterByForecast = data => {
	const finalArray = data[1].list.reduce((result, item) => {
		const date = item.dt_txt.split(' ')[0];
		const existingDateIndex = result.findIndex(group =>
			group[0].dt_txt.startsWith(date)
		);

		if (existingDateIndex === -1) {
			// Si la fecha aún no está en el resultado, crea un nuevo grupo.
			result.push([item]);
		} else {
			// Si la fecha ya está en el resultado, agrega el objeto a ese grupo.
			result[existingDateIndex].push(item);
		}

		return result;
	}, []);
	return finalArray;
};
