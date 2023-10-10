import styled from 'styled-components';

const HourlyUpdatesContainer = styled.div`
	position: relative;
	z-index: 1;
	padding: 1rem;
	@media screen and (min-width: 1024px) {
		margin-left: auto;
		margin-right: auto;
		width: max-content;
	}
`;

const StyledUpdateList = styled.ul`
	display: flex;
	gap: 2rem;
	padding: 1rem;
	overflow-x: scroll;
	border-radius: 10px;
	@media screen and (min-width: 640px) {
	}
	@media screen and (min-width: 1024px) {
		overflow-x: auto;
	}
`;

const StyledUpdateListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export { HourlyUpdatesContainer, StyledUpdateList, StyledUpdateListItem };
