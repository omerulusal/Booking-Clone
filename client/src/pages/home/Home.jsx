import React from 'react';
import "./_home.scss"
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedPrpts from '../../components/featuredPrpts/featuredPrpts';
import MailList from '../../components/mailList/MailList';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Home guests love</h1>
                <FeaturedPrpts />
                <MailList />
            </div>
            <Footer />
        </div>
    )
}

export default Home