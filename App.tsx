import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'
import { Provider as PaperProvider } from 'react-native-paper'
import TopBar from './src/components/topBar'
import { config } from './src/config'
import { RootStackParamList } from './src/routes'
import DetailsScreen from './src/screens/details'
import HomeScreen from './src/screens/home'
import NearestStopScreen from './src/screens/nearest'

// This ensures that a valid dotenv config is pulled before allowing the app to run,
// helping to avoid unnoticed runtime crashes due to invalid config.
// noinspection BadExpressionStatementJS
config

const Stack = createStackNavigator<RootStackParamList>()

enum Routes {
  HOME = 'Home',
  DETAILS = 'Details',
  NEAREST = 'Nearest',
}

const App = () => (
  <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.HOME}
        screenOptions={{
          header: (props) => <TopBar {...props} />,
        }}
      >
        <Stack.Screen name={Routes.HOME} component={HomeScreen} />
        <Stack.Screen name={Routes.DETAILS} component={DetailsScreen} />
        <Stack.Screen name={Routes.NEAREST} component={NearestStopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
)

export default App
