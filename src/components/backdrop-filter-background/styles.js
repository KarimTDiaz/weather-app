import styled from 'styled-components';

const StyledBackdropFilterBackground = styled.div`
	position: absolute;
	z-index: -1;
	top: 4%;
	left: 2.5%;
	width: 95%;
	height: 95%;
	backdrop-filter: blur(30px);
	border-radius: 10px;
`;

export { StyledBackdropFilterBackground };
