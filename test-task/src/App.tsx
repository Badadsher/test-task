import React from "react";
import "./App.scss";
import { Header, Info, Section, Footer } from "./Components/export";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <Header></Header>
        <Section></Section>
      </div>
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
