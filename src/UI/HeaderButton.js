import { Ionicons } from '@expo/vector-icons'
import { View, StyleSheet, Pressable } from "react-native"
import { colors } from '../../colors'

const styles = StyleSheet.create({
  container: {
    marginRight: 15,
  }
})

const HeaderButton =  ({ icon, onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable 
        onPress={onPress}
        android_ripple={{ color: colors.secondaryColor }}
      >
        <Ionicons name={icon} color={colors.textColor} size={30} />
      </Pressable>     
    </View>
  ) 
}

export default HeaderButton