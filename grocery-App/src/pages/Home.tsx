import React from 'react';
import Navbar from "../components/Navbar";
import imagePath from "../assets/react.svg";
import Footer from "../components/Footer";

const Home = () => {
  let items = ["Home","Your Shopping List", "Cart"];
  return (
    <>
    <Navbar  brandName="My Grocery App" 
     imageSrcPath={imagePath} 
      navItems={items}/>
    <div>This is home page</div>
    <Footer/>
    </>
  )
}

export default Home