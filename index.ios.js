import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where to register all of our app's screen

const navigatorStyle = {
      navBarBackgroundColor: '#00A3AD',
      navBarTextColor: '#fff'
}

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'foclock.TimeLine', // this is a registered name for a screen
      icon: require('./img/tab-icons/timeline.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Timeline',
      navigatorStyle: navigatorStyle
    },
    {
      screen: 'foclock.ExploreView',
      icon: require('./img/tab-icons/explore.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Explore',
      navigatorStyle: navigatorStyle
    },
    {
      screen: 'foclock.LeaderBoard',
      icon: require('./img/tab-icons/leaderboard.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Leaderboard',
      navigatorStyle: navigatorStyle
    },
    {
      screen: 'foclock.ProfileUser',
      icon: require('./img/tab-icons/profile.png'),
      iconInsets: {
        top: 6,
        bottom: -6
      },
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Profile',
      navigatorStyle: navigatorStyle
    }
  ],
  tabsStyle: {
    tabBarButtonColor: '#fff',
    tabBarSelectedButtonColor: '#000',
    tabBarBackgroundColor: '#00A3AD'
  }
});