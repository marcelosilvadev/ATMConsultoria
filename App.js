import React, { Component } from 'react';
import { View } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-coimport CenaPrincipal from './src/components/CenaPrincipal';
mponents'
import CenaPrincipal from './src/components/CenaPrincipal';
import CenaClientes from './src/components/CenaClientes'

export default class App extends Component {
  render() {
    return (
      <View>
        <CenaPrincipal />
      </View>
      // <Navigator
      //   initialRoute={{ id: 'CenaPrincipal' }}
      //   renderScene={(route, navigator) => {
      //     if (route.id === 'CenaPrincipal') {
      //       return (<CenaPrincipal />)
      //     }

      //     if (route.id === 'CenaClientes') {
      //       return (<CenaClientes />)
      //     }
      //   }}
      // />
    );
  }
}
