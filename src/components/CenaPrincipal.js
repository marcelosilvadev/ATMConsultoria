import React, { Component } from 'react';
import { View, StatusBar, Image, StyleSheet } from 'react-native';
import BarraNavegacao from './BarraNavegacao'

const logo = require('../images/logo.png')
const menuCliente = require('../images/menu_cliente.png')
const menuContato = require('../images/menu_contato.png')
const menuEmpresa = require('../images/menu_empresa.png')
const menuServico = require('../images/menu_servico.png')

export default class CenaPrincipal extends Component {
  render() {
    return (
      <View>
        <StatusBar
          //hidden
          backgroundColor='#CCC'
        />

        <BarraNavegacao />
        <View style={style.logo}>
          <Image source={logo} />
        </View>

        <View style={style.menu}>
          <View style={style.menuGrupo}>
            <Image style={style.imgMenu} source={menuCliente} />
            <Image style={style.imgMenu} source={menuContato} />
          </View>
          <View style={style.menuGrupo}>
            <Image style={style.imgMenu} source={menuEmpresa} />
            <Image style={style.imgMenu} source={menuServico} />
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  logo: {
    alignItems: 'center',
    marginTop: 30
  },
  menu: {
    alignItems: 'center',
  },
  menuGrupo:{
    flexDirection: 'row'
  },
  imgMenu:{
    margin: 15
  }
})