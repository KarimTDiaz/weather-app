import styled from 'styled-components';

const HourlyUpdatesContainer = styled.div`
	position: relative;
	z-index: 1;
	padding: 1rem;
`;

const StyledUpdateList = styled.ul`
	display: flex;
	gap: 2rem;
	padding: 1rem;
	overflow-x: scroll;
	border-radius: 10px;
`;

const StyledUpdateListItem = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export { HourlyUpdatesContainer, StyledUpdateList, StyledUpdateListItem };
