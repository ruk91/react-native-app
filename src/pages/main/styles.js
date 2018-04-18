
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';
import { scale, moderateScale, verticalScale} from '../../scaling/Scaling'

const styles = StyleSheet.create({
	screenBg: {
		flex: 1,
		width: Metrics.WIDTH,
		height: Metrics.WIDTH,
		backgroundColor: 'black',
	}
});
export default styles;
