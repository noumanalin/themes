import React from 'react';
import Hero from "../components/Home/Hero";
import Instagram from '../components/Home/Instagram';
import NewArrival from '../components/Home/NewArrival';
import Deals from "../components/Home/Deals";
import ProductCategories from "../components/Home/ProductCategories";
import FeatureCollections from "../components/Home/FeatureCollections";

const Home = () => {
    return (
        <>
            <Hero />
            <FeatureCollections/>
            <ProductCategories/>
            <Deals/>
            <Instagram/>
            <NewArrival />
        </>
    )
}

export default Home
