import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class About extends React.Component {

    static navigationOptions = {
        headerTitle: 'SOBRE EL AUTOR',
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerLabel}>
                    <Text style={styles.label}>Nombre:</Text>
                    <Text style={styles.title}>Jancarlo Ticun</Text>
                </View>
                <View style={styles.containerLabel}>
                    <Text style={styles.label}>Email:</Text>
                    <Text style={styles.title}>janta1696@gmail.com</Text>
                </View>
                <View style={styles.containerLabel}>
                    <Text style={styles.label}>Número de teléfono:</Text>
                    <Text style={styles.title}>+502 49077846</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    containerLabel: {
        marginBottom: 20,
        borderWidth: 1,
        paddingBottom: 5
    },
    label: {
        backgroundColor: '#f4511e',
        padding: 10,
        color: '#fff'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 5
    }
})