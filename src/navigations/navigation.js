import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { FONT_COLOR, BACKGROUND_COLOR } from 'src/constatns/Styles/Color';
import LoginContainer from 'src/containers/LoginContainer';
import HomeContainer from 'src/containers/HomeContainer';

const myNavigation = createSwitchNavigator(
  {
    Login: {
      screen: LoginContainer,
      // navigationOptions: () => ({
      // { navigation } 함수매개변수로 넣어줄 수 있음
      // title: 'test title',
      // headerStyle: {
      // backgroundColor: BACKGROUND_COLOR
      // },
      // headerTitleStyle: {
      //   color: FONT_COLOR,
      // },
      // }),
    },
    Home: {
      screen: HomeContainer,
      title: 'Home',
      headerStyle: {
        backgroundColor: BACKGROUND_COLOR,
      },
      headerTitleStyle: {
        color: FONT_COLOR,
      },
    },
  },
  {
    initialRouteName: 'Login',
  },
  {
    //   mode: "card",
    headerMode: 'screen',
    //   headerBackTitleVisible: true
  },
);
export default createAppContainer(myNavigation);
