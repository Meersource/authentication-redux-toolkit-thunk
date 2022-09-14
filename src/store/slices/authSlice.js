import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const STATUS = Object.freeze({
  IDLE: 'idle',
  LOADING: 'loading',
  ERROR: 'error',

})

const authenication = createSlice({
  name: "authentication",
  initialState: {
    isLiggedIn: false,
    accessToken: "",
    status: ''
  },
  reducers: {
    // Login(state, action) {
    //   const { token } = action.payload;
    //   state.isLiggedIn = true;
    //   state.accessToken = token;
    // },
    Logout(state) {
      state.isLiggedIn = false;
      state.accessToken = null;
    },
  },

  extraReducers: (builder) => {
builder.
    addCase(FetchUser.pending, (state, action) => {
      state.status = STATUS.LOADING;
    })
    .addCase(FetchUser.fulfilled, (state, action) => {
      console.log("action", action)

      state.accessToken = action.payload
      state.isLiggedIn = true
      state.status= STATUS.IDLE
    })

    .addCase(FetchUser.rejected, (state,action)=>{
      state.status = STATUS.ERROR;
    })


  }
});


export const FetchUser = createAsyncThunk('authentication/fetch', async(payload) => {
  console.log("payload", payload)
  const res = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBxvka0YRuP-tBa2TCMkVdEFb0S1jd0ugQ',
  
  {
    method: "POST",
    body: JSON.stringify({
      email: payload.email,
      password: payload.password,
      returnSecureToken: true,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })

   const data = await res.json()
   console.log("res", data)
   return data.idToken


})



export default authenication.reducer;
export const authActions = authenication.actions;



