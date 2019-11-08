import React from "react";
import "./App.css";
import DataList from "./components/dataList"
import styled from "styled-components"


const AppDiv = styled.div`
height: 500px;
text-align: center;
`
function App() {
  return (
    <AppDiv>    
      <DataList/>
    </AppDiv>
  );
}

export default App;
