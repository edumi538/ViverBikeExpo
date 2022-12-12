import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import multi from "redux-multi";

import { persistStore, persistReducer } from "redux-persist";

import { AsyncStorage } from "react-native";
import viverbike from "../config/ReactotronConfig";

const middlewares = [multi, thunk];

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancers =
  __DEV__ === true
    ? compose(applyMiddleware(...middlewares), viverbike.createEnhancer())
    : compose(applyMiddleware(...applyMiddleware));

const store =
  __DEV__ === true
    ? createStore(persistReducer, {}, enhancers)
    : createStore(persistReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export { store, persistor };
