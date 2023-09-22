import { CalendarBlank } from '@phosphor-icons/react';
import { v4 } from 'uuid';
import { ICONS_SIZES, ICONS_TYPES } from '../../constants/icons';
import { FONT_SIZE } from '../../constants/variables';
import BackdropFilterBackground from '../backdrop-filter-background/BackdropFilterBackground';
import Icon from '../icon/Icon';
import ListHeader from '../list-header/ListHeader';
import Text from '../text/Text';
import {
	FlexItem,
	ForecastListContainer,
	ForecastListItem,
	ForecastListUl
} from './styles';
const ForecastList = ({ forecast }) => {
	return (
		<>
			<ForecastListContainer>
				<BackdropFilterBackground />
				<ForecastListUl>
					<ListHeader>
						<CalendarBlank size={15} weight='fill' />
						Weekly Forecast
					</ListHeader>
					{forecast.map(item => (
						<ForecastListItem key={v4()}>
							<FlexItem>
								<Text size={FONT_SIZE.l}>{item[1]}</Text>

								<Text size={FONT_SIZE.l}>{item[3]}</Text>
							</FlexItem>
							<FlexItem>
								<Text size={FONT_SIZE.l}>{item[2]}</Text>
								<Icon
									type={ICONS_TYPES.weather}
									size={ICONS_SIZES.medium}
									src={item[4]}
								/>
							</FlexItem>
						</ForecastListItem>
					))}
				</ForecastListUl>
			</ForecastListContainer>
		</>
	);
};

export default ForecastList;
