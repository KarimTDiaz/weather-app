import { DotsThreeCircle } from '@phosphor-icons/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { COLORS } from '../../constants/variables';

const Menu = () => {
	const location = useLocation();
	const navigate = useNavigate();
	return (
		<DotsThreeCircle
			size={45}
			weight='fill'
			fill={COLORS.textColor}
			onClick={() =>
				navigate(location.pathname === '/overview' ? '/' : '/overview')
			}
		/>
	);
};

export default Menu;
