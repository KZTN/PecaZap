import React from "react";
import "dotenv";
import "./config/ReactotronConfig";
import Routes from "./routes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import store from "./store";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
        <ToastContainer autoClose={3000} />
      </Provider>
    </div>
  );
};

export default App;
