import { FONT_SIZE } from '../../constants/variables';
import BackdropFilterBackground from '../backdrop-filter-background/BackdropFilterBackground';
import ListHeader from '../list-header/ListHeader';
import Text from '../text/Text';
import { DetailsCardContainer, DetailsCardData } from './styles';

const DetailsCard = ({ theme, icon, data }) => {
	return (
		<>
			<DetailsCardContainer>
				<BackdropFilterBackground />
				<ListHeader>{theme}</ListHeader>
				<DetailsCardData>
					{icon}
					<Text size={FONT_SIZE.l}>{data}</Text>
				</DetailsCardData>
			</DetailsCardContainer>
		</>
	);
};

export default DetailsCard;
