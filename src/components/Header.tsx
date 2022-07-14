import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import colors from "../styles/colors";
import fonts from "../styles/fonts";
import userImg from "../assets/foto.png";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeating}>Olá!</Text>
        <Text style={styles.userName}>Stephane</Text>
      </View>
      <Image source={userImg} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeating: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
});
