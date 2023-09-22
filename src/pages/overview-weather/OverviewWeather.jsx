import { useEffect, useState } from 'react';
import OverviewList from '../../components/overview-list/OverviewList';
import SearchBar from '../../components/search-bar/SearchBar';
import { API_KEY, URLS } from '../../constants/apiRequests';
import { useFetch } from '../../hooks/useFetch';
import { StyledOverviewWeatherContainer } from './styles';

const OverviewWeather = () => {
	const { finalData, loading, error, setFetchInfo, response } = useFetch();
	const [lat, setLat] = useState();
	const [long, setLong] = useState();
	const [requests, setRequests] = useState([
		URLS.currentLocation + 'Paris' + API_KEY,
		URLS.currentLocation + 'Berlin' + API_KEY,
		URLS.currentLocation + 'New York' + API_KEY,
		URLS.currentLocation + 'London' + API_KEY,
		URLS.currentLocation + 'Tokyo' + API_KEY
	]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async position => {
			setLat(position.coords.latitude);
			setLong(position.coords.longitude);
			if (!lat && !long) return;
			setFetchInfo([
				URLS.currentLatLong + `lat=${lat}&lon=${long}` + API_KEY,
				...requests
			]);
		});
	}, [lat, long, requests]);

	if (loading) return <h1>Loading</h1>;
	if (error) return <h1>Loading</h1>;

	return (
		<>
			<StyledOverviewWeatherContainer>
				<SearchBar requests={requests} setRequests={setRequests} />
				<OverviewList items={finalData} />
			</StyledOverviewWeatherContainer>
		</>
	);
};

export default OverviewWeather;
