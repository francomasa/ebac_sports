import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type ProdutoState = {
  itens: Produto[]
}

const initialState: ProdutoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addCarrinho: (state, action: PayloadAction<Produto>) => {
      const productIsAlreadyInCart = state.itens.find(
        (product) => product.id === action.payload.id
      )

      //se o produto ja estiver aumenta a quantidade em 1
      if (productIsAlreadyInCart) {
        alert('Item ja adicionado')
      } else {
        state.itens = [...state.itens, action.payload]
      }
    }
  }
})

export const { addCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
