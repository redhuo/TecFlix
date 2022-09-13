import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../colors';
import Search from './Search'
import Library from './Library';
import HeaderButton from '../UI/HeaderButton';
import { useNavigation } from '@react-navigation/native';
import AgregarPlaylist from './NewPlaylist'

/*
Componente de inicio de la aplicacion, esto se va a mostrar al iniciar la aplicacion
*/
const getIconName = view => {
  switch(view) {
    case 'Search':
      return 'search'
    case 'Library':
      return 'musical-notes'
  }
}


const Tab = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation()
  return (
    <Tab.Navigator 
      initialRouteName='Search'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = getIconName(route.name)
          return <Ionicons name={iconName} size={size} color={color} />
        },
        headerStyle: {
          backgroundColor: colors.tertiary,
          elevation: 2
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
        options={{ title: 'Search' }}
      />
      <Tab.Screen
        name='Library'
        component={Library}
        options={{
          title: 'Your Library',
          headerRight: () => <HeaderButton icon='add-circle-outline' onPress={() => {
            alert("Agregar un Playlist nuevo");
            navigation.navigate('NewPlaylist')
          }} />
        }}
      />
    </Tab.Navigator>
  )
}

export default Home