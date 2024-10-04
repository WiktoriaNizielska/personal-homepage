import { configureStore } from "@reduxjs/toolkit";
import portfolioReducer from "../features/PersonalHomepage/Portfolio/Projects/portfolioSlice";
import themeReducer from "../features/PersonalHomepage/ThemeButton/themeSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    portfolio: portfolioReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);

export default store;