import { StyleSheet, Text, TouchableHighlight } from "react-native"

const Button = (props) => {
    return (
        <TouchableHighlight
        style={props.style || styles.button}
        onPress={props.onPress}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: 'lightblue',
      padding: 10,
      borderRadius: 5,
      borderColor: 'blue',
      borderWidth: 1,
      margin: 10,
    },
    text: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    }
  })

export default Button

