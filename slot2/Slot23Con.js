import React from "react";
import { Text, View } from "react-native";
export default class SL23Con extends React.Component{
    render(){
        return(
            <View>
                <Text>This name is: {this.props.TenNguoi}</Text>
            </View>
        )
    }
}