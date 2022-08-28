import { View, Button, StyleSheet } from 'react-native';

const COLOR = "#3A5278";

const styles = StyleSheet.create({
  button: {
    marginBottom: 20,
    marginLeft: 50,
    marginRight: 50,
    backgroundColor: 'white',
    color: '#2565AE',
    marginTop: 30,
  },
})

const MyButton = ({ title, onPress, color = COLOR, disabled = false }) => {
  return (
    <View style={styles.button}>
      <Button disabled={disabled} title={title} color={color} onPress={onPress}/>
    </View>
  )
}

export default MyButton;