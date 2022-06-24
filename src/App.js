import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import {Trending,orginals,action,horror,tv}  from './urls'

function App() {
  return (
    <div>
    <NavBar/>
    <Banner/>
    <RowPost url={Trending} title='Trending Now'  />
    <RowPost url={orginals} title='Netflix Orginals' isSmall />
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={horror} title='Horror' isSmall/>
    <RowPost url={tv} title='TV Shows' isSmall/>
    </div>
  );
}

export default App;
