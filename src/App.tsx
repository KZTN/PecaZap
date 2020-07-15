import React from "react";
import "dotenv";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import "./styles/global.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
