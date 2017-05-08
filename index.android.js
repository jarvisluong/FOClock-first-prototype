import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where to register all of our app's screen

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'foclock.TimeLine', // this is a registered name for a screen
      icon: require('./img/dummy.png'),
      // selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Timeline'
    },
    {
      label: 'Two',
      screen: 'foclock.ExploreView',
      icon: require('./img/dummy.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Explore'
    },
    {
      label: 'Three',
      screen: 'foclock.LeaderBoard',
      icon: require('./img/dummy.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Leaderboard'
    },
    {
      label: 'Four',
      screen: 'foclock.ProfileUser',
      icon: require('./img/dummy.png'),
      // selectedIcon: require('../img/two_selected.png'), // iOS only
      title: 'Profile'
    }
  ]
});