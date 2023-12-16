import { createSlice } from "@reduxjs/toolkit"

const initialState={
    selectedVille:null,
    selectedTEvent:null,
    selectedQuartier:null,
    selectedTLieux:null,
    selectedHebergement:null
}
 const filterSlice = createSlice({
  name: 'filter',
  initialState  ,
  reducers: {
    changeVille:(state,action)=>{
        state.selectedVille=action.payload
    },
    changeTEvent:(state,action)=>{
        state.selectedTEvent=action.payload
    },
    changeQuartier:(state,action)=>{
        state.selectedQuartier=action.payload
    },
    changeTLieux:(state,action)=>{
        state.selectedTLieux=action.payload
    },
    changeHebergement:(state,action)=>{
        state.selectedHebergement=action.payload
    },
    resetAllState:(state)=>{
        state.selectedVille=null
        state.selectedTEvent=null
        state.selectedQuartier=null
        state.selectedTLieux=null
        state.selectedHebergement=null


    }
   
  }
})

export const {changeVille,changeTEvent,changeQuartier,changeTLieux,changeHebergement,resetAllState}=filterSlice.actions
export default filterSlice.reducer