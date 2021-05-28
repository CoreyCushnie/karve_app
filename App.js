import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import TouchScreen from "./src/screens/TouchScreen";
import PinScreen from "./src/screens/Pin";
import Home from "./src/screens/Home";
import Send_Request from "./src/screens/SendRequest";
import Cards from "./src/screens/Cards";

const App = () => {
  const AppStack = createStackNavigator();
  const TabStack = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({focused}) => {
      let icon = "";
      const color = focused ? "#d8b600" : "#828282"; 
      const size = 15;

      switch(route.name){
        case "Home":
          icon = 'linechart';
          break
          case "Cards":
            icon = 'creditcard';
            break
          case "Send & Request":
            icon = 'retweet';
            break
        default:
          return
      }
      return <AntDesign name={icon} size={size} color={color} />
    }
    
  });
  const tbOptions = {
    showLabel: true,
    activeTintColor: '#d8b600',
    style: {
      backgroundColor: "#1e1e1e",
      padding: 10,
      paddingBottom: 10,
      borderTopColor: "#ffffff1a",
      // fontFamily: "Avenir",
      justifyContent: "center"
    },
  };

  const Tabs = () => {
    return (
      <TabStack.Navigator tabBarOptions={tbOptions} screenOptions={screenOptions}>
        <TabStack.Screen name="Home" component={Home} />
        <TabStack.Screen name="Cards" component={Cards} />
        <TabStack.Screen name="Send & Request" component={Send_Request} />
      </TabStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode={"none"}>
        <AppStack.Screen name="Login" component={TouchScreen} />
        <AppStack.Screen name="Pin" component={PinScreen} />
        <AppStack.Screen name="Tabs" component={Tabs} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
