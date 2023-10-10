import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants/variables';

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	max-width: 1440px;
	backdrop-filter: blur(50px);
	border-bottom-left-radius: ${BORDER_RADIUS.s};
	border-bottom-right-radius: ${BORDER_RADIUS.s};
`;
export { StyledHeader };
