import React from 'react';
import Product from './Product';
import './home.css';

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image" 
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                    alt="" 
                />
                <div className="home__row">
                    <Product
                        title="Noise ColorFit Pro 3 Smart Watch"
                        price={19.99}
                        image="https://m.media-amazon.com/images/I/61URhg0oLGL._AC_UY327_FMwebp_QL65_.jpg"
                        rating= {4}
                    />
                    <Product 
                        title="New Apple Watch Series 6 (GPS, 44mm)"
                        price={250}
                        image="https://m.media-amazon.com/images/I/71ZlG-lXrSL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={5}
                    />
                    <Product 
                        title="Samsung Galaxy Watch Active 2"
                        price={150}
                        image="https://m.media-amazon.com/images/I/61uej9efKYL._AC_UL480_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)"
                        price={599}
                        image="https://m.media-amazon.com/images/I/91BGpV19r0L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                    <Product
                        title="New Apple iPhone 12 Pro Max (256GB) - Pacific Blue"
                        price={899}
                        image="https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY327_FMwebp_QL65_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                <Product
                    title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual 5120 x 1440"
                    price={1094.98}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                />
                </div>
            </div>
        </div>
    )
}

export default Home
