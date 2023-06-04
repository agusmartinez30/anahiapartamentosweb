import {createSlice} from '@reduxjs/toolkit'



export const propertySlice = createSlice({
  name: 'properties',
  initialState: [],
  reducers: {
    updateState: (state, action) => {
      state.push(action.payload)
    },

  }
})

export const {updateState} = propertySlice.actions
export default propertySlice.reducer