import React from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import Footer from "./Components/Footer/Footer";
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

    <Footer/>
    </div>
  );
}

export default App;
