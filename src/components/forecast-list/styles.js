import styled from 'styled-components';
import { COLORS } from '../../constants/variables';

const ForecastListContainer = styled.div`
	position: relative;
	z-index: 1;
	padding: 1rem;
`;

const ForecastListUl = styled.ul`
	border-radius: 10px;
`;

const ForecastListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 0.5rem 2rem;
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 5%;
		width: 90%;
		height: 0.05rem;
		background-color: ${COLORS.secondary};
	}
`;
const FlexItem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1.5rem;
	width: 6.5rem;
`;
export { FlexItem, ForecastListContainer, ForecastListItem, ForecastListUl };
