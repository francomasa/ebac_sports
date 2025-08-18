import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Produto } from '../../App'
import * as S from './styles'

import { RootReducer } from '../../store'
import { addCarrinho } from '../../store/reducers/carrinho'
import { addFavoritos, removeFavoritos } from '../../store/reducers/favoritos'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

//const ProdutoItem = (produto: Produto) => {
const ProdutoItem = (prop: { produto: Produto }) => {
  const { produto } = prop

  //const produtos = useSelector((state: RootReducer) => state.carrinho.itens)
  const listaFavoritos = useSelector(
    (state: RootReducer) => state.favoritos.itens
  )
  const estaNosFavoritos = listaFavoritos.find((p) => p.id === produto.id)
  const dispatch = useDispatch()

  const favoritar = () => {
    dispatch(addFavoritos(produto))
  }

  const removeFavorito = () => {
    dispatch(removeFavoritos(produto))
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={estaNosFavoritos ? removeFavorito : favoritar}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(addCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoItem
