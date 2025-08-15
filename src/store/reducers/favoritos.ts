import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    addFavoritos: (state, action) => {
      const productIsAlreadyInFavorites = state.itens.find(
        (producto) => producto.id === action.payload.id
      )
      if (productIsAlreadyInFavorites) {
        const favoritosSemProduto = state.itens.filter(
          (producto) => producto.id !== action.payload.id
        )
        //state.itens = [...state.itens, favoritosSemProduto]
        console.log(favoritosSemProduto)
      } else {
        state.itens = [...state.itens, action.payload]
        console.log(state)
        console.log(action)
      }
    }
  }
})

export const { addFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
