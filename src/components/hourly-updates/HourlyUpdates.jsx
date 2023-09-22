import { ClockCountdown } from '@phosphor-icons/react';
import { v4 } from 'uuid';
import { ICONS_SIZES, ICONS_TYPES } from '../../constants/icons';
import { FONT_SIZE } from '../../constants/variables';
import { kelvinToCelcius } from '../../utils/kelvinToCelcius';
import BackdropFilterBackground from '../backdrop-filter-background/BackdropFilterBackground';
import Icon from '../icon/Icon';
import ListHeader from '../list-header/ListHeader';
import Text from '../text/Text';
import {
	HourlyUpdatesContainer,
	StyledUpdateList,
	StyledUpdateListItem
} from './styles';

const HourlyUpdates = ({ forecast }) => {
	const elementsToShow = forecast.flat().slice(0, 8);

	return (
		<HourlyUpdatesContainer>
			<BackdropFilterBackground />
			<ListHeader>
				<ClockCountdown size={16} weight='fill' />
				Hourly Updates
			</ListHeader>
			<StyledUpdateList>
				{elementsToShow.map(item => (
					<>
						<StyledUpdateListItem key={v4()}>
							<Text size={FONT_SIZE.s}>{item.dt_txt.slice(11, 16)}</Text>
							<Icon
								type={ICONS_TYPES.weather}
								size={ICONS_SIZES.small}
								src={item.weather[0].icon}
							/>
							<Text size={FONT_SIZE.s}>{kelvinToCelcius(item.main.temp)}</Text>
						</StyledUpdateListItem>
					</>
				))}
			</StyledUpdateList>
		</HourlyUpdatesContainer>
	);
};

export default HourlyUpdates;
