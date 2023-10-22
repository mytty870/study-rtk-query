import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { pokemonApi } from './services/pokemon'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // getDefaultMiddleware が非推奨になっているみたい。解決法は後に探すことにする。
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)
