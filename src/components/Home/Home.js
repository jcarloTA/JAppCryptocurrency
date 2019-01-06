import React from 'react'
import { View,StyleSheet,SafeAreaView,StatusBar, ScrollView, Image}  from 'react-native'
import CryptoCotainer from './../CryptoContainer/CryptoContainer';
import Icon from '@expo/vector-icons/Ionicons';

export default class Home extends React.Component {

    static navigationOptions = {
        headerTitle: 'CRIPTOMONEDAS',
    }
    constructor(props) {
        super(props)
        console.log('construc home ')
    }

    componentDidMount() {
    }

    render() {
        return (
            <ScrollView>
                <CryptoCotainer />
            </ScrollView>
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