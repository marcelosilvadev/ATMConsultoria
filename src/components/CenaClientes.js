import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet, Text } from 'react-native';
import BarraNavegacao from './BarraNavegacao'
const detalheClientes = require('../images/detalhe_cliente.png')
const cliente1 = require('../images/cliente1.png')
const cliente2 = require('../images/cliente2.png')


export default class CenaClientes extends Component {
  render() {
    return (
      <View>
        <StatusBar
          //hidden
          backgroundColor='#CCC'
        />
        <BarraNavegacao />
        <View style={style.cabecalho}>
          <Image source={detalheClientes} />
          <Text style={style.txtTitulo}>Nossos Clientes</Text>
        </View>

        <View style={style.detalheCliente}>
          <Image source={cliente1} />
          <Text>Nossos Clientes</Text>
        </View>

        <View style={style.detalheCliente}>
          <Image source={cliente2} />
          <Text>Nossos Clientes</Text>
        </View>

      </View>
    );
  }
}

const style = StyleSheet.create({
  cabecalho: {
    flexDirection: 'row',
    marginTop: 20
  },
  txtTitulo: {
    fontSize: 30,
    color: '#B9C941',
    marginLeft: 10,
    marginTop: 25
  },
  detalheCliente: {
    padding: 20,
    marginTop: 10
  },
  txtDetalheCliente: {
    fontSize: 18,
    marginLeft: 20
  }
})