import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Router from './router/Router';
import { GlobalStyle } from './styles/GlobalStyles';

const App = () => {
	const API_KEY = 'a295efbb47f6d952c01def716e14afbb';

	/* const [lat, setLat] = useState([]);

	const [long, setLong] = useState([]);

	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			navigator.geolocation.getCurrentPosition(position => {
				setLat(position.coords.latitude);
				setLong(position.coords.longitude);
			});
			await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${API_KEY}`
			)
				.then(res => res.json())
				.then(result => {
					console.log(result);
				});
		};
		fetchData();
	}, [lat, long]); */

	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Header />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
