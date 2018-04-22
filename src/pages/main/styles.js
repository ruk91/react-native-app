
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';
import { scale, moderateScale, verticalScale} from '../../scaling/Scaling'

const deviceW = Dimensions.get('window');

const styles = StyleSheet.create({
	screenBg: {
		flex: 1,
		width: Metrics.WIDTH,
		height: Metrics.WIDTH,
		backgroundColor: 'black',
	},
	logo_horizontal:{   
		height: (deviceW.width)*0.07,
		width: (deviceW.width)*0.07,
		// height: moderateScale(32, 0.4),
		// width: moderateScale(32, 0.4),
	},
});
export default styles;
