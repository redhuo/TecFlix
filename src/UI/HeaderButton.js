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
    <View style={styles.container}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.secondaryColor}>
        <Ionicons name={icon} color={colors.textColor} size={30} />
      </TouchableHighlight>   
    </View>   
  ) 
}

export default HeaderButton