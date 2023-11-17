/* trocar a logo da loja */
import logo from '../../assets/logo.png';

import product_1 from '../../assets/produtos/product_1.png';
import product_2 from '../../assets/produtos/product_2.png';
import product_3 from '../../assets/produtos/product_3.png';
import product_4 from '../../assets/produtos/product_4.png';
import product_5 from '../../assets/produtos/product_5.png';

const carrinho = {
  topo: {
    titulo: "Detalhe da compra",
  },
  detalhes: {
    nome: "Carrinho de suplementos",
    logoLoja: logo,
    nomeLoja: "GR's Suplementos",
    descricao: "Um conjuntos de produtos de qualidade para sua sáude e evolução muscular",
    botao: "Comprar",
  },
  itens: {
    titulo: "Itens do carrinho",
    lista: [
      {
        nome: "SUPER WHEY 100% PURE",
        imagem: product_1,
        preco: "R$ 129,51",
        botao: "Adicionar ao carrinho"
      },
      {
        nome: "MASS TITANIUM 17500",
        imagem: product_2,
        preco: "R$ 99,90",
        botao: "Adicionar ao carrinho"
      },
      {
        nome: "WHEY ISOLATE BLACK SERIES",
        imagem: product_3,
        preco: "R$ 189,90",
        botao: "Adicionar ao carrinho"
      },
      {
        nome: "T_SEK - POWER SUPPLEMENTS",
        imagem: product_4,
        preco: "R$ 64,90 ",
        botao: "Adicionar ao carrinho"
      },
      {
        nome: "DILATEX - POWER SUPPLEMENTS",
        imagem: product_5,
        preco: "R$ 57,00",
        botao: "Adicionar ao carrinho"
      }
    ]
  }
}

export default carrinho;