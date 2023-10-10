import { useEffect, useState } from 'react';
import OverviewList from '../../components/overview-list/OverviewList';
import PopUp from '../../components/pop-up/PopUp';
import SearchBar from '../../components/search-bar/SearchBar';
import { API_KEY, URLS } from '../../constants/apiRequests';
import { useFetch } from '../../hooks/useFetch';
import { StyledOverviewWeatherContainer } from './styles';

const OverviewWeather = () => {
	const { finalData, loading, error, message, setFetchInfo } = useFetch();
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

	useEffect(() => {
		if (!finalData) return;
		finalData.forEach((data, index) => {
			if (!data) {
				const filteredRequests = requests.filter(
					(_, index) => finalData[index + 1] !== undefined
				);
				setRequests(filteredRequests);
			}
		});
	}, [finalData]);

	if (loading) return <h1>Loading</h1>;
	if (error) return <h1>Loading</h1>;
	console.log(finalData);
	return (
		<>
			<StyledOverviewWeatherContainer>
				{message === 'Invalid Location' && <PopUp />}
				<SearchBar requests={requests} setRequests={setRequests} />
				<OverviewList items={finalData} />
			</StyledOverviewWeatherContainer>
		</>
	);
};

export default OverviewWeather;
