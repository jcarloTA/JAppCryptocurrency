import React from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends React.Component {

  render () {
    return (
      <View>
        <ScrollView>
          <View>
              <Text onPress={ () => this.props.navigation.navigate('Home')}>
              Home
              </Text>
          </View>
        </ScrollView>
        <View>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

export default SideMenu;