import React from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import SignUp from './SignUp/SignUp'
import Login from './Login/Login'
import ChocolatesPage from '../components/ChoclatePage/Choclate'
import FlashSale from '../components/FlashSale/FlashSale'
import CategoryBrowser from '../components/CategoryBrowser/CategoryBrowser'
import BestSellingProducts from '../components/BestSellingProducts/BestSellingProduct'
import PromotionBanner from '../components/PromotionBanner/PromotionBanner'
import ExploreProducts from '../components/ExploreProducts/ExploreProducts'
import NewArrival from '../components/NewArrival/NewArrival'
import Wishlist from '../components/Wishlist/Wishlist'
import Footer from '../components/Footer/Footer'
import Serices from "../components/Serices/serices"
import Checkout from '../components/Checkout/Checkout'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Navbar/> 
      <ChocolatesPage/>
      <FlashSale/>
      <CategoryBrowser/>
      <BestSellingProducts/>
      <PromotionBanner/>
      {/* <ExploreProducts/> */}
      {/* <NewArrival/> */}
      <Serices/> 
      <Footer/> 
    </div>
  )
}

export default Home
