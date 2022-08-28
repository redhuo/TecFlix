import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Playlist from './src/views/Playlist';
import { colors } from './colors';
import Home from './src/views/Home';

const styleOptions = {
  headerStyle: {
    backgroundColor: colors.tertiary
  },
  headerTitleStyle: {
    fontWeight: "bold",
    color: colors.textColor,
  },
  headerTintColor: colors.textColor,
  contentStyle: {
    backgroundColor: colors.secondary
  }
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor={colors.secondary}/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Playlist"
            component={Playlist}
            options={styleOptions}
          />
        </Stack.Navigator>       
      </NavigationContainer> 
    </>
  );
}

export default App;
