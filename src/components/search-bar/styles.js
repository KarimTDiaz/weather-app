import styled from 'styled-components';

const SearchBarContainer = styled.div`
	position: relative;
`;

const StyledSearchBar = styled.input`
	position: relative;
	width: 100%;
	padding: 0.5rem 2rem 0.5rem 3rem;
	font-size: 18px;
	background-color: transparent;
	color: white;
	border: 2px solid white;
	border-radius: 5rem;
	&:focus {
		outline: none;
		caret-color: white;
	}
`;

export { SearchBarContainer, StyledSearchBar };
