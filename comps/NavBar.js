import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./HomeScreen"
import GameScreen from "./GameScreen"
import LoginScreen from "./LoginScreen"

const Stack = createNativeStackNavigator()

const NavBar = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />

        </Stack.Navigator>
    )
}

export default NavBar
