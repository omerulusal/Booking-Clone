import React from 'react';
import "./_home.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <Header />
            <Footer />
        </div>
    )
}

export default Home