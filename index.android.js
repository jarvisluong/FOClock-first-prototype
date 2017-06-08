import { Navigation } from 'react-native-navigation';
import tabs from './app/app.js';

Navigation.startTabBasedApp({
  tabs,
  appStyle: {
    tabBarButtonColor: '#fff',
    tabBarSelectedButtonColor: '#000',
    tabBarBackgroundColor: '#00A3AD'
  }
});
