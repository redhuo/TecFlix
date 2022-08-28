import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const styles = StyleSheet.create({
  picker: {
    backgroundColor: '#3a3a3a',
    width: '50%',
    marginBottom: 20,
    marginLeft: 15,
    color: 'white',
  },
});

const createItem = item => <Picker.Item key={item} label={item} value={item}/>

const MyPicker = ({ items, onChangeText, name, value }) => {
  return (
    <Picker
      style={styles.picker}
      selectedValue={value}
      onValueChange={itemValue => onChangeText(name, itemValue)}
    >
      {items.map(createItem)}
    </Picker>
  );
}

export default MyPicker;