import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'
const initialState = {
    list:[]
}
export const CardSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            if(!state.list.find(item=>item.id===action.payload.id)){
            state.list = [action.payload,...state.list]
                
            }
            
            // console.log(state)
        },
        deleteBtn:(state,action)=>{
            state.list = state.list.filter(item=>item.id!== action.payload.id)
        },
        deleteAll:(state,action)=>{
            state.list = []
        }
    }
})
export const {add,deleteBtn,deleteAll} =  CardSlice.actions
export default CardSlice.reducer