import {configureStore } from '@reduxjs/toolkit'
import propertyReducer from '../features/properties/propertySlices'

const store = configureStore({
  reducer: {
    property: propertyReducer
  }
})

export default store