import { createGlobalStyle } from 'styled-components';
import { COLORS, FONT_FAMILY } from '../constants/variables';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
    box-sizing: border-box;
}
img{
	max-width: 100%;
	display: block;
}
ul {
	list-style: none;
	padding-left: 0;
	margin-top: 0;
	margin-bottom: 0;
  }
a {
	text-decoration: none;
	color: inherit;
  }
body {
	margin: 0;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
	font-family: ${FONT_FAMILY.primary};
	color: ${COLORS.primary};
	background-color: ${COLORS.dark};
}
`;

export { GlobalStyle };
