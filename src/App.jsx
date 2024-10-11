import { useState } from 'react'
import './App.css'

import React from 'react'
import Banner from './components/Banner/Banner'
import Navbar from './components/navbar/Navbar'
import ChocolatesPage from './components/ChoclatePage/Choclate'
import FlashSale from './components/FlashSale/FlashSale'
import CategoryBrowser from './components/CategoryBrowser/CategoryBrowser'
import BestSellingProducts from './components/BestSellingProducts/BestSellingProduct'
import PromotionBanner from './components/PromotionBanner/PromotionBanner'
import ExploreProducts from './components/ExploreProducts/ExploreProducts'
import NewArrival from './components/NewArrival/NewArrival'
import Serices from './components/Serices/serices'
import Footer from './components/Footer/Footer'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'



const App = () => {
  return (
    <div>
      <Banner/>
      <Navbar/>
      {/* <SignUp/> */}
      {/* <Login/> */}
      <ChocolatesPage/>
      <FlashSale/>
      <CategoryBrowser/>
      <BestSellingProducts/>
      <PromotionBanner/>
      <ExploreProducts/>
      <NewArrival/>
      <Serices/>
      <Footer/> 
    </div>
  )
}

export default App



