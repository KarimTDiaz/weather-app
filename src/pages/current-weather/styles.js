import styled from 'styled-components';

const CurrentWeatherContainer = styled.div`
	padding: 5rem 0;
	background-image: ${({ background }) => background};
	background-repeat: no-repeat;
	background-size: cover;
`;

const CurrentWeatherMainData = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const FlexContainer = styled.div`
	display: flex;
	gap: 2rem;
	padding-top: 1rem;
`;

const DetailsCardsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	padding: 0rem 0.5rem;
	@media screen and (min-width: 1024px) {
		margin-left: auto;
		margin-right: auto;
		width: 60%;
	}
`;

export {
	CurrentWeatherContainer,
	CurrentWeatherMainData,
	DetailsCardsContainer,
	FlexContainer
};
