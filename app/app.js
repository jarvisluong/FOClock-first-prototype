import './storage/cacheStorage.js';

import { registerScreens } from './screens';

const timelineIcon = require('../img/tab-icons/timeline.png');
const exploreIcon = require('../img/tab-icons/explore.png');
const leaderboardIcon = require('../img/tab-icons/leaderboard.png');
const profileIcon = require('../img/tab-icons/profile.png');
const dummyIcon = require('../img/dummy.png');

registerScreens(); // this is where to register all of our app's screen

const navigatorStyle = {
  navBarBackgroundColor: '#00A3AD',
  navBarTextColor: '#fff'
};

const tabs = [
  {
    screen: 'foclock.TimeLine', // this is a registered name for a screen
    icon: timelineIcon,
    iconInsets: {
      top: 6,
      bottom: -6
    },
    // selectedIcon: require('../img/one_selected.png'), // iOS only
    title: 'Timeline',
    navigatorStyle
  },
  {
    screen: 'foclock.ExploreView',
    icon: exploreIcon,
    iconInsets: {
      top: 6,
      bottom: -6
    },
    // selectedIcon: require('../img/two_selected.png'), // iOS only
    title: 'Explore',
    navigatorStyle
  },
  {
    screen: 'foclock.LeaderBoard',
    icon: leaderboardIcon,
    iconInsets: {
      top: 6,
      bottom: -6
    },
    // selectedIcon: require('../img/two_selected.png'), // iOS only
    title: 'Leaderboard',
    navigatorStyle
  },
  {
    screen: 'foclock.ProfileUser',
    icon: profileIcon,
    iconInsets: {
      top: 6,
      bottom: -6
    },
    // selectedIcon: require('../img/two_selected.png'), // iOS only
    title: 'Profile',
    navigatorStyle
  }
];

if (__DEV__) {
  tabs.push({
    screen: 'foclock.DevView',
    icon: dummyIcon,
    iconInsets: {
      top: 6,
      bottom: -6
    },
    title: 'Dev View',
    navigatorStyle
  });
}

export default tabs;
