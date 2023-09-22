import { API_KEY, URLS } from '../../constants/apiRequests';
import { ICONS_SIZES, ICONS_TYPES } from '../../constants/icons';
import Icon from '../icon/Icon';
import { SearchBarContainer, StyledSearchBar } from './styles';

const SearchBar = ({ requests, setRequests }) => {
	return (
		<SearchBarContainer>
			<form onSubmit={ev => handleSubmit(ev, requests, setRequests)}>
				<Icon
					type={ICONS_TYPES.search}
					size={ICONS_SIZES.small}
					src={'/assets/icons/search.svg'}
				/>
				<StyledSearchBar type='search' id='search' name='search' />
			</form>
		</SearchBarContainer>
	);
};

const handleSubmit = (ev, requests, setRequests) => {
	ev.preventDefault();
	setRequests([
		URLS.currentLocation + ev.target.search.value + API_KEY,
		...requests
	]);
	ev.target.reset;
};

export default SearchBar;
