import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Menu from '../menu/Menu';
import { StyledHeader } from './styles';

const Header = () => {
	const [route, setRoute] = useState(true);
	const location = useLocation();
	return (
		<>
			<StyledHeader>
				<Menu />
			</StyledHeader>
		</>
	);
};

export default Header;
