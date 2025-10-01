import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import SL23Con from "./Slot23Con";

const SudungProps = (props) => {
  return (
    <TextInput
      //...props: kí hiệu để truyền
      {...props}
      editable
      maxLength={100}
    ></TextInput>
  );
};
//dinh nghia state
const SudungState = () => {
  const [giatri, hamThayDoiGiaTri] = useState("");
  return (
     <View style={{flex:1,justifyContent:'center', alignItems:'center',marginTop:'2px'}}>
      <SudungProps style={{color:'white',Background:'blue',border:'2px solid green'}}
        onChangeText={(text) => hamThayDoiGiaTri(text)}
        value={giatri}
      />

      <Text> Gia tri moi la{giatri}</Text>
      <SL23Con TenNguoi={giatri} />
    </View>
  );
};
//export
export default SudungState;
