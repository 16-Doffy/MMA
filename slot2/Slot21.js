import React from "react";
import { Text, View } from "react-native";
export default class SL21 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        //khai bao bien
        text:"Click me!",
        dem:0,
    }
  }
  //defind funtion updateText
  updateText(){
    this.setState((preState) =>{
        return {
            dem:preState.dem + 1, //chang values count
            text:'Ban vui long click lan' ,//change text
        }
    });
  }
  //render
  render(){
    return(
        <View>
            <Text 
            //call ham
            onPress={()=> this.updateText()}>
                {this.state.text} : {this.state.dem}
            </Text>
        </View>
    )
  }
}
