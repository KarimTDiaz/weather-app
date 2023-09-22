import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import { BACKGROUNDS } from '../../constants/backgrounds';
import { ICONS_SIZES, ICONS_TYPES } from '../../constants/icons';
import { FONT_SIZE } from '../../constants/variables';
import { kelvinToCelcius } from '../../utils/kelvinToCelcius';
import Icon from '../icon/Icon';
import Text from '../text/Text';
import {
	FlexContainer,
	OverviewListContainer,
	OverviewListItem,
	StyledOverviewList
} from './styles';

const OverviewList = ({ items }) => {
	const navigate = useNavigate();

	return (
		<>
			<OverviewListContainer>
				<StyledOverviewList>
					{items.map((item, index) => (
						<OverviewListItem
							key={v4()}
							background={BACKGROUNDS[items[index].weather[0].main]}
							onClick={() => navigate('/', { state: item.name })}
						>
							<FlexContainer>
								<div>
									<Text size={FONT_SIZE.xl}>{item.name}</Text>
									<Text size={FONT_SIZE.xl}>
										{kelvinToCelcius(item.main.temp)}
									</Text>
									<Text>{item.weather[0].description}</Text>
								</div>
								<Icon
									type={ICONS_TYPES.weather}
									size={ICONS_SIZES.big}
									src={item.weather[0].icon}
								/>
							</FlexContainer>
						</OverviewListItem>
					))}
				</StyledOverviewList>
			</OverviewListContainer>
		</>
	);
};

export default OverviewList;
