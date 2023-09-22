import { StyledText } from './styles';

const Text = ({ size, children }) => {
	return <StyledText size={size}>{children}</StyledText>;
};

export default Text;
