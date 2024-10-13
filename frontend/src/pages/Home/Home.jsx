import React, { useState } from 'react';
import Appdownload from '../../components/appdownload/appdownload';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import Header from '../../components/Header/Header';
import './Home.css';

function Home  (){
    const [category,setCategory] = useState("All")
    
    return (
        <>
        <Header/>
        <ExploreMenu  category ={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Appdownload/>

        </>
    )
}

export default Home
