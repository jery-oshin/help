import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import { Link } from 'gatsby';
const AboutPage = () => (
    <div>
        <Header />
        <h1>About</h1>
        <p>I am a software developmen</p>
        <p>may I help you ? <Link to="/contact"> Contact me. </Link></p>
        <Footer />
    </div>
);


export default AboutPage