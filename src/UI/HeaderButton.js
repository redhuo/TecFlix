import { Ionicons } from '@expo/vector-icons'
import { TouchableHighlight, View, StyleSheet } from "react-native"
import { colors } from '../../colors'

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  }
})

const HeaderButton =  ({ icon, onPress }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="white">
      <View style={styles.container}>
        <Ionicons name={icon} color={colors.textColor} size={30} />
      </View>
    </TouchableHighlight>
  ) 
}

export default HeaderButton