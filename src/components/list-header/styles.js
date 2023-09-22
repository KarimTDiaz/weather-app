import styled from 'styled-components';
import { COLORS, FONT_SIZE } from '../../constants/variables';

const StyledListHeader = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	position: relative;
	padding: 0.5rem 1rem;
	font-size: ${FONT_SIZE.xs};
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

export { StyledListHeader };
