const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SettingDarkVersion from "./screens/SettingDarkVersion";
import Icons from "./screens/Icons";
import DashboardDarkVersion from "./screens/DashboardDarkVersion";
import PopUpDarkVersion from "./screens/PopUpDarkVersion";
import HomepageDarkVersion from "./screens/HomepageDarkVersion";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const SplashScreen = () => <View />;

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SettingDarkVersion"
              component={SettingDarkVersion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Icons"
              component={Icons}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardDarkVersion"
              component={DashboardDarkVersion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PopUpDarkVersion"
              component={PopUpDarkVersion}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomepageDarkVersion"
              component={HomepageDarkVersion}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
