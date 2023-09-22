import { ICONS_TYPES } from '../../constants/icons';
import { SearchIcon, WeatherIcon } from './styles';

const Icon = ({ type, size, src }) => {
	switch (type) {
		case ICONS_TYPES.weather:
			return (
				<WeatherIcon
					size={size}
					src={`https://openweathermap.org/img/wn/${src}@2x.png`}
					alt='Icono de Tiempo'
				/>
			);
		case ICONS_TYPES.search:
			return <SearchIcon size={size} src={src} alt='Icono de Lupa' />;

		default:
			break;
	}
};

export default Icon;
