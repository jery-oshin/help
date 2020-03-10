import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';

const AboutPage = () => (
    <Layout>
        <h1>About</h1>
        <p>I am a software developmen</p>
        <p>may I help you ? <Link to="/contact"> Contact me. </Link></p>
    </Layout>
);


export default AboutPage