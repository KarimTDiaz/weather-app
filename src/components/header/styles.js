import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants/variables';

const StyledHeader = styled.header`
	display: flex;
	justify-content: center;
	position: fixed;
	bottom: 0;
	z-index: 100;
	width: 100%;
	backdrop-filter: blur(50px);
	border-top-left-radius: ${BORDER_RADIUS.s};
	border-top-right-radius: ${BORDER_RADIUS.s};
`;
export { StyledHeader };
