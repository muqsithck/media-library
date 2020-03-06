import React from "react";
import './App.css'
import { Provider } from "react-redux";
import store from "./redux/store";
import Landing from './components/landing'

function App() {
  return (
    <Provider store={store}>
         <Landing />
     </Provider>
  );
}

export default App;