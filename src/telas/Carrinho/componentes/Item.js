import React from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item: { nome, imagem, preco, botao } }) {
  return <View style={estilos.item}>
    <Image source={imagem} style={estilos.imagem}/>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <Texto style={estilos.preco}>{preco}</Texto>
    
    <TouchableOpacity style={estilos.botao} onPress={() => {}}>
        <Texto style={estilos.textoBotao}>{botao}</Texto>
      </TouchableOpacity>
  </View>
}

const estilos = StyleSheet.create({
  item: {
    backgroundColor: "#24273a",
    flexDirection: "column",
    borderBottomWidth: 1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    //marginHorizontal: 16,
    alignItems: "center",
  },
  imagem: {
    width: 64,
    height: 64,
  },
  nome: {
    fontSize: 18,
    lineHeight: 26,
    marginLeft: 11,
    color: "#F3F3F3"
  },
  preco: {
    color: '#2A9F85',
    fontWeight: 'bold',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  botao: {
    marginTop: 8,
    backgroundColor: '#2A9F85',
    paddingVertical: 13,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 16,
    fontWeight: 'bold',
  },
});