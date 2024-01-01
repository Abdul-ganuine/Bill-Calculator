import React, { useEffect } from "react";
import Main from "./Components/Main";
import Header from "./Components/Header";
import TipCard from "./Components/TipCard";
import InputBox from "./Components/InputBox";
import TipDisplayInfo from "./Components/TipDisplayInfo";
import { useState } from "react";
import { TipProvider } from "./Context/TipContext";

function App() {
  return (
    <TipProvider>
      <Main>
        <Header />
        <TipCard>
          <InputBox />
          <TipDisplayInfo />
        </TipCard>
      </Main>
    </TipProvider>
  );
}

export default App;
