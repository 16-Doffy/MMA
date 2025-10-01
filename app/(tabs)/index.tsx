import Slot1Funtion from '@/slot1/Slot1Funtion';
import React from 'react';
import { StyleSheet } from "react-native";
export default function HomeScreen() {
  return (
  <Slot1Funtion></Slot1Funtion>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
