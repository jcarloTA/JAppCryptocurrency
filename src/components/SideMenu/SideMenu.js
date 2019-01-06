import React from 'react';
import { NavigationActions, DrawerItems } from 'react-navigation';
import {ScrollView, Text, View, SafeAreaView, Dimensions , StyleSheet, Image} from 'react-native';


class SideMenu extends React.Component {

  constructor(props) {
    super(props)
  }

  render () { 
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.headerContent}>
            <Image 
              source={require('./../../assets/imgs/logo.png')} 
              style={styles.logo}
            />
        </View>
        <ScrollView>
          <DrawerItems {... this.props} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headerContent:{
    display: 'flex',
    height:150,
    backgroundColor: '#f4511e',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 140,
    width: 210,
  }
})

export default SideMenu; 