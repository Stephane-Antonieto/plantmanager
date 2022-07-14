import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviButton({ title, active = false }: EnviButtonProps) {
  return;
}

const styles = StyleSheet.create({});
