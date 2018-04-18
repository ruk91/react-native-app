
import { Platform, StyleSheet, Dimensions } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';
import { scale, moderateScale, verticalScale} from '../../scaling/Scaling'

const styles = StyleSheet.create({
	// logoContainer: {
	// 	flex: 1,
	// 	marginTop: scale(30),
	// 	justifyContent: 'center',
	// 	alignItems: 'center'
	//   },
	slide1:{
		flex: 0.9,
		//marginTop: scale(30),
		justifyContent: 'center',
		alignItems: 'center'
	 },
	 slide2:{
		flex: 0.9,
		//marginTop: scale(30),
		justifyContent: 'center',
		alignItems: 'center'
	 },
	 buttonContainer: {
		justifyContent: 'center',
		alignItems: 'center'
	 },
	screenBg: {
		flex:1,
		width:Metrics.WIDTH,
		height:  Metrics.WIDTH,
		backgroundColor:'black',
	},

	logostyle: {
		alignSelf:'center',
		marginTop:30,
		width: 130,
		height: 100
	},
	backArrow: {
    backgroundColor: 'transparent',
  },
	header: {
		backgroundColor: Colors.transparent,
		height: Metrics.WIDTH * 0.15,
		borderBottomWidth: 0,
		...Platform.select({
			ios: {},
			android: {
				marginTop: Fonts.moderateScale(25)
			}
		}),
		elevation: 0
	},
	left: {
		flex: 0.5,
		backgroundColor: 'transparent',
	},
	login_logo:{
		width: moderateScale(240,1.0),
		height:moderateScale(120,0.30)   
	  },
	right: {
		flex: 0.5,
		backgroundColor: 'transparent',
	},
	body: {
		flex: 3,
		alignItems: 'center',
		backgroundColor: 'transparent',
	},

	textTitle: {
    color: "white",
    fontSize: Fonts.moderateScale(16),
    alignSelf: 'center',
	  fontFamily: Fonts.type.sfuiDisplaySemibold,
		textAlign: 'center',
		justifyContent: 'center'
  },

	container:{
		alignItems:'center',
		flex:1,
		flexDirection:'row',
		justifyContent:'center'
			},
	headertext: {
		fontFamily: Fonts.Bariol,
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:30,
		width :Metrics.WIDTH * .90,
		color:'#ffffff',
		marginTop:Metrics.HEIGHT*0.06
	},
	desctext: {
		fontFamily: 'SFUIDisplay-Regular',
		backgroundColor:'transparent',
		textAlign:'center',
		alignSelf:'center',
		fontSize:16,
		width :Metrics.WIDTH * 0.90,
		color:Colors.txtgrey,
		marginTop:Metrics.WIDTH *0.06
	},
	form: {
		alignSelf:'center',
		marginTop:Metrics.WIDTH *0.03
	},
	inputemail: {
		textAlign: 'center',
		fontFamily:Fonts.SFUIDisplayRegular,
		color:'white',
	},

	buttongetstarted: {
		backgroundColor:'red',
		alignSelf:'center',
		paddingTop:12,
		paddingBottom:12,
		borderRadius:40,
		width :Metrics.WIDTH * .80,
		marginTop:20
	},
	buttongettext: {
		alignSelf:'center',
		fontFamily: 'SFUIDisplay-Semibold',
		color:'white',
	},

	backicon: {
		width:10,
		height:18,
		 marginLeft:20,
		 marginTop:5,
	},
	item:{
		justifyContent:'center',
		alignSelf:'center',
		width :Metrics.WIDTH *.80,
		marginTop:Metrics.WIDTH *0.01,
		height:Metrics.WIDTH *0.12
	},
	btnget:{
		backgroundColor:'#FC1616',
		alignSelf:'center',
		width :Metrics.WIDTH *.80,
		marginTop:Metrics.WIDTH *0.05,
		height:Metrics.WIDTH *0.12,
		borderRadius:40,
		justifyContent: 'center',
		alignItems: 'center'

	}



});
export default styles;
