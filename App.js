import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screen/LoginScreen";
import DetailsScreen from "./screen/DetailsScreen";
import LatestSneakersScreen from "./screen/LatestSneakersScreen"; // Ensure this import is correct
import Sportswear from "./screen/Sportswear";
import LimitedEditions from "./screen/LimitedEditions";
import PersonalizedPicks from "./screen/PersonalizedPicks";
import NewArrivals from "./screen/NewArrivals";
import Profile from "./screen/Profile";
import SpecialOffers from "./screen/SpecialOffers";
import FastDelivery from "./screen/FastDelivery";
import BestSellers from "./screen/BestSellers";
import SearchScreen from "./screen/SearchScreen"; // Ensure the file name is correct
import CartScreen from "./screen/CartScreen";
import Sneakers from "./screen/Sneakers";
import Orders from "./screen/Orders";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: "#222" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          gestureEnabled: true,
        }}
      >
        {/* Auth Screens */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        {/* Main Screens */}
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LatestSneakers"
          component={LatestSneakersScreen} // Ensure this matches the imported component
          options={{ headerShown: false }}
        />

        {/* Category Screens */}
        <Stack.Screen
          name="Sportswear"
          component={Sportswear}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LimitedEditions"
          component={LimitedEditions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalizedPicks"
          component={PersonalizedPicks}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sneakers"
          component={Sneakers}
          options={{ headerShown: false }}
        />

        {/* Quick Access Screens */}
        <Stack.Screen
          name="NewArrivals"
          component={NewArrivals}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SpecialOffers"
          component={SpecialOffers}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FastDelivery"
          component={FastDelivery}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BestSellers"
          component={BestSellers}
          options={{ headerShown: false }}
        />

        {/* Search and Cart Screens */}
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />

        {/* Profile & Orders Screen */}
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Orders"
          component={Orders}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}