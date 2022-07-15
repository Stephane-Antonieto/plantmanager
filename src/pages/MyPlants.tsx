import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Header } from "../components/Header";

// --------------------------------------------------------------------
import waterdropImg from "../assets/waterdrop.png";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

// --------------------------------------------------------------------
export function MyPlants() {
  // ------------------------------------------------------------------
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.spotlight}>
        <Image source={waterdropImg} style={styles.spotlightImg} />
        <Text style={styles.spotlightText}>asdasd</Text>
      </View>
    </View>
  );
}

// --------------------------------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
  spotlight: {},
  spotlightImg: {},
  spotlightText: {},
});
