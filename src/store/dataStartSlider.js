import { createSlice } from "@reduxjs/toolkit"
import {data} from '../Data'

const initialState=data
 const dataStartSlider = createSlice({
  name: 'like',
  initialState  ,
  reducers: {
    toggleLikeStart:(state,action)=>{
        state.map((item)=>{
            const newData=item.id===action.payload.id?item.like=!item.like
            :item
            return newData
           })
     }
   
  }
})

export const {toggleLikeStart}=dataStartSlider.actions
export default dataStartSlider.reducer