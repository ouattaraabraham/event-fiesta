import { createSlice } from "@reduxjs/toolkit"

const initialState=[]
 const counterSlice = createSlice({
  name: 'counter',
  initialState  ,
  reducers: {
    toggleLieux:(state,action)=>{
      const lieux= state.find(item=>item.id===action.payload.id)
  
    if(lieux){
        return state.filter(item=>item.id!==action.payload.id)
    }else{
      state.push(action.payload)
    }
    
    }
   
  }
})

export const {toggleLieux}=counterSlice.actions
export default counterSlice.reducer