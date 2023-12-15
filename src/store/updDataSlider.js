import { createSlice } from "@reduxjs/toolkit"

import {data} from '../Data'

const initialState=[]
 const updDataSlider = createSlice({
  name: 'updData',
  initialState  ,
  reducers: {
    fcUpdData:(state,action)=>{
       return state=action.payload
    },
    toggleLike:(state,action)=>{
        state.map((item)=>{
            const newData=item.id===action.payload.id?item.like=!item.like
            :item
            return newData
           })
     }
   
  }
})

export const {fcUpdData,toggleLike}=updDataSlider.actions
export default updDataSlider.reducer