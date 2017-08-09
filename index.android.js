import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

// start the app
Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'example.FirstTabScreen', // this is a registered name for a screen
      icon: require('./img/one@2x.ios.png'),
      selectedIcon: require('./img/one@2x.ios.png'), // iOS only
      title: 'Screen One'
    },
    {
      label: 'Two',
      screen: 'example.SecondTabScreen',
      icon: require('./img/one@2x.ios.png'),
      selectedIcon: require('./img/one@2x.ios.png'), // iOS only
      title: 'Screen Two'
    }
  ]
});
