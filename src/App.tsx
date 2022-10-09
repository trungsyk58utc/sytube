import React from "react";
import "./App.css";
import Header from "./component/Header/Header";
import RoutePage from "./Routes/RoutePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <RoutePage />
    </div>
  );
};

export default App;
