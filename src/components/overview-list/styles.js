import styled from 'styled-components';
import { BORDER_RADIUS } from '../../constants/variables';

const OverviewListContainer = styled.div`
	padding: 3rem 0;
`;
const StyledOverviewList = styled.ul``;

const OverviewListItem = styled.li`
	padding: 1rem;
	margin-bottom: 1rem;
	background-image: ${({ background }) => background};
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: ${BORDER_RADIUS.s};
`;

const FlexContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;

export {
	FlexContainer,
	OverviewListContainer,
	OverviewListItem,
	StyledOverviewList
};
