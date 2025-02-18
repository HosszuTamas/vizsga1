import { Text, View } from "react-native"
import Button from "./Button"


const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text>Főoldal</Text>
            <Button title="Játék" 
            onPress={() => navigation.navigate('Game')} />

            <Button title="Belépés" 
            onPress={() => navigation.navigate('Login')} />

        </View>
    )
}

export default HomeScreen
