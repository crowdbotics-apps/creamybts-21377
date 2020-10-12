import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings138372Navigator from '../features/Settings138372/navigator';
import Settings138338Navigator from '../features/Settings138338/navigator';
import BlankScreen0138335Navigator from '../features/BlankScreen0138335/navigator';
import Settings138320Navigator from '../features/Settings138320/navigator';
import Settings138303Navigator from '../features/Settings138303/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings138372: { screen: Settings138372Navigator },
Settings138338: { screen: Settings138338Navigator },
BlankScreen0138335: { screen: BlankScreen0138335Navigator },
Settings138320: { screen: Settings138320Navigator },
Settings138303: { screen: Settings138303Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
