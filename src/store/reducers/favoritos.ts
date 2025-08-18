import { createSlice } from '@reduxjs/toolkit'

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
      const productIsAlreadyInFavoritos = state.itens.some(
        (product) => product.id === action.payload.id
      )
      if (productIsAlreadyInFavoritos) {
        state.itens = state.itens.filter(
          (producto) => producto.id !== action.payload.id
        )
      } else {
        state.itens = [...state.itens, action.payload]
      }
    },

    removeFavoritos: (state, action) => {
      const productIsAlreadyInFavoritos = state.itens.some(
        (product) => product.id === action.payload.id
      )
      if (productIsAlreadyInFavoritos) {
        state.itens = state.itens.filter(
          (producto) => producto.id !== action.payload.id
        )
      } else {
        state.itens = [...state.itens, action.payload]
      }
      return
    }
  }
})

export const { addFavoritos, removeFavoritos } = favoritosSlice.actions
export default favoritosSlice.reducer
