import styled from 'styled-components';

const StyledText = styled.p`
	margin: 0;
	font-size: ${({ size }) => size};
	text-transform: capitalize;
`;

export { StyledText };
