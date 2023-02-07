import React, { useState } from "react";
import {
  Searchbar,
  List,
  Avatar,
  Button,
  Card,
  Text,
} from "react-native-paper";
import {
  StyleSheet,
  SafeAreaView,
  View,
  StatusBar,
  ScrollView,
} from "react-native";
import { RestaurantInfo } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView>
      <View style={{ padding: 16 }}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={{ padding: 16 }}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
};