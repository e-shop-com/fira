import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SearchScreen from "../screens/SearchScreen";
import SettingsScreen from "../screens/SettingsScreen";
import Colors from "../constants/Colors";

const StackNavOptions = {
  headerStyle: { borderBottomColor: Colors.tabBarBorderTop, height: 70 },
  headerTitleStyle: { fontSize: 14 }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? `ios-home` : "md-home"}
    />
  )
};

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    navigationOptions: {
      ...StackNavOptions
    }
  }
);

SearchStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-search" : "md-search"}
    />
  )
};

const MessageStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

MessageStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-text" : "md-text"}
    />
  )
};

const ProfileStack = createStackNavigator(
  {
    Profile: SettingsScreen
  },
  {
    navigationOptions: { ...StackNavOptions }
  }
);

ProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-person" : "md-person"}
    />
  )
};

export default createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    MessageStack,
    ProfileStack
  },
  {
    initialRouteName: "HomeStack",
    tabBarOptions: {
      showLabel: false,
      style: {
        borderTopColor: Colors.tabBarBorderTop
      }
    }
  }
);
