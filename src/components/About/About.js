import React from 'react'
import { View, Text } from 'react-native'

export default class About extends React.Component {

    static navigationOptions = {
        headerTitle: 'SOBRE EL AUTOR',
    }

    constructor(props) {
        super(props)
        console.log('construc home ')
    }

    render() {
        return (
            <View>
                <Text>Sobre mi</Text>
            </View>
        )
    }
}