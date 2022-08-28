import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'
import Search from './src/views/Search';
import Playlist from './src/views/Playlist';
import Library from './src/views/Library';

const getIconName = view => {
  switch(view) {
    case 'Search':
      return 'search'
    case 'Library':
      return 'musical-notes'
  }
}

const Tab = createBottomTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name)
          return <Ionicons name={iconName} size={size} color={color} />
        }
      })}
    >
      <Tab.Screen
        name='Search'
        component={Search}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          title: 'My Library'
        }}
      />
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeTabs}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Playlist"
            component={Playlist}
          />
        </Stack.Navigator>       
      </NavigationContainer> 
    </>
  );
}

export default App;
