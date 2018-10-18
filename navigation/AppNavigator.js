import React from "react";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import Nav from "../components/NavBar/Nav";
import ProfileScreen from "../screens/ProfileScreen";
import LeaderboardScreen from "../screens/LeaderboardScreen";
import LeaderboardsScreen from "../screens/LeaderboardsScreen";
import editProfile from "../components/Profiles/editProfile";
import Aftab from "../components/Games/Aftab";
import Eric from "../components/Games/Eric";
import Anthony from "../components/Games/Anthony";

export default (AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Login: { screen: LoginScreen },
  Landing: { screen: LandingScreen },
  NavBar: { screen: Nav },
  EditProfile: { screen: editProfile },
  Profile: { screen: ProfileScreen },
  Leaderboard: { screen: LeaderboardScreen },
  Leadboards: { screen: LeaderboardsScreen },
  Eric: { screen: Eric },
  Aftab: { screen: Aftab },
  Anthony: { screen: Anthony }
}));
