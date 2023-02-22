import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useFlipper} from '@react-navigation/devtools';
import SignUp from '../modules/auth/screens/SignUp';
import Walkthrough from '../modules/auth/screens/Walkthrough';
import AddProfile from '../modules/profile/screens/AddProfile';

const Stack = createNativeStackNavigator();

const RootRouter = () => {
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="AddProfile"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Walkthrough" component={Walkthrough} />
        <Stack.Screen name="AddProfile" component={AddProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootRouter;
