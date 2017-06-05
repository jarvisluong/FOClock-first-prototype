import { Navigation } from 'react-native-navigation';
import { registerScreens } from './app/screens';

const timelineIcon = require('./img/tab-icons/timeline.png');
const exploreIcon = require('./img/tab-icons/explore.png');
const leaderboardIcon = require('./img/tab-icons/leaderboard.png');
const profileIcon = require('./img/tab-icons/profile.png');

registerScreens(); // this is where to register all of our app's screen

const navigatorStyleAndroid = {
      navBarBackgroundColor: '#00A3AD',
      navBarTextColor: '#fff',
      navBarTitleTextCentered: true
};

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'foclock.TimeLine', // this is a registered name for a screen
      icon: timelineIcon,
      iconInsets: {
        top: 6,
        bottom: -6
      },
      title: 'Timeline',
      navigatorStyle: navigatorStyleAndroid
    },
    {
      screen: 'foclock.ExploreView',
      icon: exploreIcon,
      iconInsets: {
        top: 6,
        bottom: -6
      },
      title: 'Explore',
      navigatorStyle: navigatorStyleAndroid
    },
    {
      screen: 'foclock.LeaderBoard',
      icon: leaderboardIcon,
      iconInsets: {
        top: 6,
        bottom: -6
      },
      title: 'Leaderboard',
      navigatorStyle: navigatorStyleAndroid
    },
    {
      screen: 'foclock.ProfileUser',
      icon: profileIcon,
      iconInsets: {
        top: 6,
        bottom: -6
      },
      title: 'Profile',
      navigatorStyle: navigatorStyleAndroid
    }
  ],
  appStyle: {
    tabBarButtonColor: '#fff',
    tabBarSelectedButtonColor: '#000',
    tabBarBackgroundColor: '#00A3AD'
  }
});
