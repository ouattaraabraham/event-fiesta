import { configureStore } from '@reduxjs/toolkit'
import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

import favoritesReducer from './lieuxFavoriSlice'
import filterReducer from './filterSlice'
import upDataReducer from './updDataSlider'
import dataStartReducer from './dataStartSlider'


const persistConfig = {
  key: 'root',
  // version:1,
  storage,
}
const reducer= combineReducers({
  favorites:favoritesReducer,
  filter:filterReducer,
  updData:upDataReducer,
  dataStart:dataStartReducer,


  // reducer:{
  //   favorites:favoritesReducer,
  // }
  
})

const persistedReducer= persistReducer(persistConfig,reducer)

export const store = configureStore({
  reducer:persistedReducer,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false, }), redutor: { user: persistedReducer, }, 
  })  



// export const storee=()=>{
//   let store = createStore(persistedReducer)
//   return store
// }
// export const persistor = () => {
//   let persistor = persistStore(storee())
//   return persistor
// }
