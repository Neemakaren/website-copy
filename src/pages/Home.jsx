import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Main from '../components/main/Main';
import Hero from '../components/hero/Hero';
import Banner from '../components/banner/Banner';
import Lifestyle from '../components/lifestyle/Lifestyle';
import Author from '../components/author/Author';
import Contact from '../components/contact/Contact';
import Cards from '../components/cards/Cards';
import Footer from '../components/footer/Footer';



const Home = () => {
  return (
    <>
    <Navbar />
    <Main />
    <Hero />
    <Banner />
    <Lifestyle />
    <Author />
    <Contact />
    <Cards />
    <Footer />
    </>

  )
}

export default Home