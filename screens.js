import { Navigation } from 'react-native-navigation';

import DrinkMenu from './app/internalViews/DrinkMenu';
import SingleEventDetail from './app/internalViews/SingleEventDetail';

import ExploreView from './app/rootViews/ExploreView';
import LeaderBoard from './app/rootViews/LeaderBoard';
import ProfileUser from './app/rootViews/ProfileUser';
import TimeLine from './app/rootViews/TimeLine';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('foclock.DrinkMenu', () => DrinkMenu);
  Navigation.registerComponent('foclock.SingleEventDetail', () => SingleEventDetail);

  Navigation.registerComponent('foclock.ExploreView', () => ExploreView);
  Navigation.registerComponent('foclock.LeaderBoard', () => LeaderBoard);
  Navigation.registerComponent('foclock.ProfileUser', () => ProfileUser);
  Navigation.registerComponent('foclock.TimeLine', () => TimeLine);
}