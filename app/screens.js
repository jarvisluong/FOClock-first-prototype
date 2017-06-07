import { Navigation } from 'react-native-navigation';

import DrinkMenu from './internalViews/DrinkMenu';
import SingleEventDetail from './internalViews/SingleEventDetail';

import ExploreView from './rootViews/ExploreView';
import LeaderBoard from './rootViews/LeaderBoard';
import ProfileUser from './rootViews/ProfileUser';
import TimeLine from './rootViews/TimeLine';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('foclock.DrinkMenu', () => DrinkMenu);
  Navigation.registerComponent('foclock.SingleEventDetail', () => SingleEventDetail);

  Navigation.registerComponent('foclock.ExploreView', () => ExploreView);
  Navigation.registerComponent('foclock.LeaderBoard', () => LeaderBoard);
  Navigation.registerComponent('foclock.ProfileUser', () => ProfileUser);
  Navigation.registerComponent('foclock.TimeLine', () => TimeLine, store, Provider);
}
