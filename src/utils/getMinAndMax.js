import { formatDateAndFilterByCurrent } from './formatDateAndFilterByCurrent';
import { kelvinToCelcius } from './kelvinToCelcius';

export const getMinAndMax = data => {
	const dates = formatDateAndFilterByCurrent(data[1]);

	let minTemp = Infinity;
	let maxTemp = -Infinity;

	dates.forEach(item => {
		const tempMin = item.main.temp_min;
		const tempMax = item.main.temp_max;
		if (tempMin < minTemp) {
			minTemp = tempMin;
		}
		if (tempMax > maxTemp) {
			maxTemp = tempMax;
		}
	});
	return [kelvinToCelcius(minTemp), kelvinToCelcius(maxTemp)];
};
