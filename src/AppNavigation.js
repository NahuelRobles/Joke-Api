import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';


const AppContainer = createSwitchNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerBackTitle: null,
    },
  }
);

const AppContainerCreator = createAppContainer(AppContainer);

export default () => {
  return (
    <AppContainerCreator/>
  );
};
