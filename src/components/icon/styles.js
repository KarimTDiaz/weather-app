import styled from 'styled-components';

const WeatherIcon = styled.img`
	width: ${({ size }) => size};
	height: ${({ size }) => size};
`;

const SearchIcon = styled.img`
	position: absolute;
	top: 0.25rem;
	left: 0.55rem;
	width: ${({ size }) => size};
	height: ${({ size }) => size};
`;
export { SearchIcon, WeatherIcon };
