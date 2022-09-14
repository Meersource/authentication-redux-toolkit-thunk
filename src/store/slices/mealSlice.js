import {createSlice, createAsyncThunk } from "@reduxjs/toolkit"


const mealReducer = createSlice({
    name: 'meal',
    initialState: {
        status: '',
        meals: [],
        mealList: [],
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchMeal.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(FetchMeal.fulfilled, (state, action) => {
                state.meals=(action?.payload)
                    state.status = 'success'
            })
            .addCase(FetchMeal.rejected, (state, action)=>{
                state.status = 'error'
            })
            .addCase(GetMealByName.pending, (state, action)=>{
                state.status= 'loading'
            })
            .addCase(GetMealByName.fulfilled, (state, action) =>{
                state.mealList = (action?.payload)
                state.status = 'success'
            })
             .addCase(GetMealByName.rejected, (state, action) =>{
                state.status ='error'
            })
            
    }


})




export const FetchMeal = createAsyncThunk('getMeal', async () => {
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=p`)
    const data = await res.json()
    return data?.meals
})

export const GetMealByName = createAsyncThunk('getMealByName',async(payload)=>{
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${payload.search}`)
    const data = await res.json()
    return data?.meals
})

export default mealReducer.reducer;
export const mealAction = mealReducer.actions;



