import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Frame from "./components/Frame";
import Homepage from "./components/Homepage";
import LogIn from "./components/LogIn";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Frame" component={Frame} />
        <Tab.Screen name="LogIn" component={LogIn} />
        <Tab.Screen name="Homepage" component={Homepage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
