

/**
 * Universal App Theme Variables
 */

import { Dimensions, Platform } from 'react-native';
const { width, height } = Dimensions.get('window');

// Colors
const BLACK = '#000';
const WHITE = '#fff';
const MANGO = "#ff922b";
const PALE_GREY = "#eceff1";
const SILVER = "#cfd8dc";
const COOL_GREY = "#b0bec5";
const GREEN = "#20c997";
const BLUE_GREY = "#607d8b";

const PRIMARY_BUTTON_COLOR = "#20c997";
const DEFAULT_BUTTON_COLOR = "rgba(255,146,43,0.5)";
const DEFAULT_BUTTON_TEXT_COLOR = "rgba(255,146,43,1.0)";

const TAB_BAR_DEFAULT_BUTTON_COLOR = 'rgba(0,0,0,0.2)';
const TAB_BAR_SELECTED_BUTTON_COLOR = MANGO;
const TAB_BAR_BACKGROUND_COLOR = WHITE;

const BOTTOM_BADGE_TEXT_COLOR = WHITE;
const BOTTOM_BADGE_BACKGROUND_COLOR = MANGO;

const TRANSPARENT = "#0000";


module.exports = {

  HEIGHT: height,
  WIDTH: width,

  // the Apps Primary Color


  PRIMARY_COLOR: TRANSPARENT,

  // Screen Background Color
  BACKGROUND_COLOR: PALE_GREY,

  // Primary Button
  PRIMARY_BUTTON_COLOR,

  // Default Button
  DEFAULT_BUTTON_COLOR,
  DEFAULT_BUTTON_TEXT_COLOR,

  // Tab Bar
  TAB_BAR_DEFAULT_BUTTON_COLOR,
  TAB_BAR_SELECTED_BUTTON_COLOR,
  TAB_BAR_BACKGROUND_COLOR,

  // Header
  HEADER_TITLE_COLOR: WHITE,

  // main navigator style
  navigatorStyle: {

    navBarHidden: true,
    navBarNoBorder: true,
    statusBarBlur: false,
  	statusBarTextColorScheme: 'light',

  	tabBarButtonColor: TAB_BAR_DEFAULT_BUTTON_COLOR,
  	tabBarSelectedButtonColor: TAB_BAR_SELECTED_BUTTON_COLOR,
  	tabBarBackgroundColor: WHITE,
  	// topBarElevationShadowEnabled: false,
  	// tabBarHidden: false,
  	// drawUnderTabBar: false,

    // navBarTextFontFamily: 'OpenSans-Regular',
    // navBarBackgroundColor: MANGO,
    // navBarButtonColor: WHITE,

    orientation: 'portrait',

    // Android only
    navBarTitleTextCentered: true,
    statusBarColor: MANGO,


    // iOS only
    statusBarTextColorSchemeSingleScreen: 'light', // same as statusBarTextColorScheme but does NOT remember across pushes
    statusBarHideWithNavBar: false, // hide the status bar if the nav bar is also hidden, useful for navBarHidden:true
    statusBarHidden: true, // make the status bar hidden regardless of nav bar state

    disabledBackGesture: false, // default: false. Disable the back gesture (swipe gesture) in order to pop the top screen.
    disabledSimultaneousGesture: true, // default: true. Disable simultaneous gesture recognition.

  },

  tabsStyle: {
    tabBarButtonColor: TAB_BAR_DEFAULT_BUTTON_COLOR,
    tabBarSelectedButtonColor: TAB_BAR_SELECTED_BUTTON_COLOR,
    tabBarBackgroundColor: TAB_BAR_BACKGROUND_COLOR,
    tabBarTextFontFamily: 'OpenSans-Regular',
  },


  appStyle: {
    forceTitlesDisplay: true,
    orientation: 'portrait',
    tabFontFamily: 'OpenSans-Regular',
    ...Platform.select({
      android: {
        bottomTabBadgeTextColor: BOTTOM_BADGE_TEXT_COLOR, // Android only
        bottomTabBadgeBackgroundColor: BOTTOM_BADGE_BACKGROUND_COLOR, // Android only
      },
      ios: {}
    }),
  },

}
