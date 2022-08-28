import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons'
import Search from './src/views/Search';
import Playlist from './src/views/Playlist';
import Library from './src/views/Library';
import { colors } from './colors';
import HeaderButton from './src/UI/HeaderButton';

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
      initialRouteName='Library'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name)
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerStyle: {
          backgroundColor: colors.tertiary,
          elevation: 2,
          height: 120
        },
        headerTitleStyle: {
          color: colors.textColor,
          fontWeight: 'bold' 
        },
        tabBarStyle: { 
          backgroundColor: colors.tertiary,
          elevation: 2,
          paddingTop: 5,
          paddingBottom: 10,
          height: 60,
          marginTop: 0,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.textColor,
      })}
      sceneContainerStyle={{
        backgroundColor: colors.secondary
      }}
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
          title: 'Your Library',
          headerRight: () => <HeaderButton icon='add-circle-outline' onPress={() => {}} />
        }}
      />
    </Tab.Navigator>
  )
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
            component={HomeTabs}
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
