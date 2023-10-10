import {
	DropHalfBottom,
	Thermometer,
	Waves,
	Wind
} from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import DetailsCard from '../../components/details-card/DetailsCard';
import ForecastList from '../../components/forecast-list/ForecastList';
import HourlyUpdates from '../../components/hourly-updates/HourlyUpdates';
import Text from '../../components/text/Text';
import { API_KEY, URLS } from '../../constants/apiRequests';
import { BACKGROUNDS } from '../../constants/backgrounds';
import { DETAILS_THEMES } from '../../constants/detailsThemes';
import { FONT_SIZE } from '../../constants/variables';
import { useFetch } from '../../hooks/useFetch';
import { formatDateAndFilterByForecast } from '../../utils/formatDateAndFilterByForecast';
import { getMediumTempByDay } from '../../utils/getMediumTempByDay';
import { getMinAndMax } from '../../utils/getMinAndMax';
import { kelvinToCelcius } from '../../utils/kelvinToCelcius';
import {
	CurrentWeatherContainer,
	CurrentWeatherMainData,
	DetailsCardsContainer,
	FlexContainer
} from './styles';

const CurrentWeather = () => {
	const { state } = useLocation();
	const [lat, setLat] = useState();
	const [long, setLong] = useState();
	const { finalData, loading, error, setFetchInfo } = useFetch();

	useEffect(() => {
		if (state) {
			setFetchInfo([
				URLS.currentLocation + state + API_KEY,
				URLS.forecastLocation + state + API_KEY
			]);
			return;
		}
		navigator.geolocation.getCurrentPosition(async position => {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
			if (!lat && !long) return;
			setFetchInfo([
				URLS.currentLatLong + `lat=${lat}&lon=${long}` + API_KEY,
				URLS.forecastLatLong + `lat=${lat}&lon=${long}` + API_KEY
			]);
		});
	}, [lat, long]);

	if (loading) return <h1>Loading</h1>;
	if (error) return <h1>Wrong...</h1>;

	return (
		<>
			<CurrentWeatherContainer
				background={BACKGROUNDS[finalData[0].weather[0].main]}
			>
				<CurrentWeatherMainData>
					<Text size={FONT_SIZE.xl}>{finalData[0].name}</Text>
					<Text size={FONT_SIZE.xxl}>
						{kelvinToCelcius(finalData[0].main.temp)}
					</Text>
					<Text>{finalData[0].weather[0].description}</Text>
					<FlexContainer>
						<Text>Min: {getMinAndMax(finalData)[0]}</Text>
						<Text>Max: {getMinAndMax(finalData)[1]}</Text>
					</FlexContainer>
				</CurrentWeatherMainData>
				<HourlyUpdates forecast={formatDateAndFilterByForecast(finalData)} />
				<ForecastList forecast={getMediumTempByDay(finalData)} />
				<DetailsCardsContainer>
					<DetailsCard
						theme={DETAILS_THEMES.PRESSURE}
						icon={<DropHalfBottom size={50} weight='fill' />}
						data={finalData[0].main.pressure}
					/>
					<DetailsCard
						theme={DETAILS_THEMES.FEELS_LIKE}
						icon={<Thermometer size={50} weight='fill' />}
						data={kelvinToCelcius(finalData[0].main.feels_like)}
					/>
					<DetailsCard
						theme={DETAILS_THEMES.WIND}
						icon={<Wind size={50} weight='fill' />}
						data={`${finalData[0].wind.speed} km/h`}
					/>
					<DetailsCard
						theme={DETAILS_THEMES.HUMIDITY}
						icon={<Waves size={50} weight='fill' />}
						data={`${finalData[0].main.humidity}º`}
					/>
				</DetailsCardsContainer>
			</CurrentWeatherContainer>
		</>
	);
};

export default CurrentWeather;
