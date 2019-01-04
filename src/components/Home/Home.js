import React from 'react'
import { View, Text,StyleSheet,StatusBar}  from 'react-native'

export default class Home extends React.Component {

    static navigationOptions = {
        title: 'Block Chain',
        headerMode: 'float'
    }
    constructor(props) {
        super(props)
        console.log('construc home ')
    }

    componentDidMount() {
    }

    render() {
        return (
            <View>
                <Text>Home Page</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });