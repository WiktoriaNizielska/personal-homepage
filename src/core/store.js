import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/PersonalHomepage/Portfolio/Projects/portfolioSlice";

export default configureStore({
  reducer:{
    portfolio: portfolioReducer,
  }
})