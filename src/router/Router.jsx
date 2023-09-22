import { Route, Routes } from 'react-router-dom';
import CurrentWeather from '../pages/current-weather/CurrentWeather';
import OverviewWeather from '../pages/overview-weather/OverviewWeather';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<CurrentWeather />} />
			<Route path='/overview' element={<OverviewWeather />} />
		</Routes>
	);
};

export default Router;
