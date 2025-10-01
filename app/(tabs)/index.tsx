import SL34char from '@/slot2/Slot25ChaRieng';
import React from 'react';
import { StyleSheet, View } from "react-native";
export default function HomeScreen() {
  return (
  //<Slot1Funtion></Slot1Funtion>
  //<SL21></SL21>
  // <SL22></SL22>
<View style={styles.stepContainer}>
  <SL34char />
</View>

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
    flex:1,
    justifyContent:'center',
    textAlign:'center',
     margin:'auto',
   
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
      
  },
});
