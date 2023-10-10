import { formatDateAndFilterByForecast } from './formatDateAndFilterByForecast';
import { kelvinToCelcius } from './kelvinToCelcius';

export const getMediumTempByDay = data => {
	const weekDaysArray = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
	const forecastRawData = formatDateAndFilterByForecast(data);
	const dailyForecastOverView = [];

	forecastRawData.map(item => {
		const dayOfTheWeek = new Date(item[0].dt_txt.split(' ')[0]).getDay();

		const maxTemp = item.reduce((sum, currentItem) => {
			if (currentItem.main.temp_max > sum) {
				sum = currentItem.main.temp_max;
			}
			return sum;
		}, -Infinity);
		const minTemp = item.reduce((sum, currentItem) => {
			if (currentItem.main.temp_min < sum) {
				sum = currentItem.main.temp_min;
			}
			return sum;
		}, Infinity);
		const icon =
			item.length === 8 ? item[4].weather[0].icon : item[0].weather[0].icon;

		dailyForecastOverView.push([
			item[0].dt_txt.split(' ')[0],
			weekDaysArray[dayOfTheWeek],
			kelvinToCelcius(maxTemp),
			kelvinToCelcius(minTemp),
			icon
		]);
	});

	return dailyForecastOverView;
};
