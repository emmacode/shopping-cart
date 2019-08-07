import React from "react";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";

import "./App.css";
import cartReducer from "./store/reducers/cartReducer1";
import Main from "./views";

const store = createStore(
  cartReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
