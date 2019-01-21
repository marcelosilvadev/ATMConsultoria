
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class BarraNavegacao extends Component {
    render() {
        return (
            <View>
                <View style={style.barraTitulo}>
                    <Text style={style.titulo}>ATM Consultoria</Text>
                </View>
            </View>
        );
    }
}
const style = StyleSheet.create({
    barraTitulo: {
        backgroundColor: '#CCC',
        padding: 10,
        height: 60
    },
    titulo: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        color: '#000'
    }
})