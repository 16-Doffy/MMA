
import { useState } from "react";
import { Button, Text, View } from "react-native";
function Sl22(){
    //khai bao status count with value create equal 0
    const [count,setCount] = useState(0);
    return (
        <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
            <Text>So lan nhấp chuot :{count} </Text>
            <Button onPress={()=>setCount(count + 1)}>Click me @</Button>
        </View>
    )
}
export default Sl22;
//use Text and View thay cho div