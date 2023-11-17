import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Detalhes({
  nome,
  logoLoja,
  nomeLoja,
  descricao,
}) {
  return (
    <>
      <Texto style={estilos.nome}>{nome}</Texto>
      <View style={estilos.loja}>
        <Image source={logoLoja} style={estilos.imagemLoja} />
        <Texto style={estilos.nomeLoja}>{nomeLoja}</Texto>
      </View>
      <Texto style={estilos.descricao}>{descricao}</Texto>
    </>
  );
}

const estilos = StyleSheet.create({
  nome: {
    color: '#F3F3F3',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  loja: {
    flexDirection: 'row',
    paddingVertical: 12,
  },
  imagemLoja: {
    width: 32,
    height: 32,
  },
  nomeLoja: {
    color: "#F7F7F7",
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  descricao: {
    color: '#B3B3B3',
    fontSize: 16,
    lineHeight: 26,
  },
});
