import {configureStore } from "@reduxjs/toolkit"
import usersReducer from "../featchers/usersSlice"





  const store = configureStore({
    reducer:{
      users:  usersReducer,
    }
  })

  export default store