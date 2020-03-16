import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';


import Head from '../components/head'


const AboutPage = () => (
    <Layout>
        <Head title="About" />
        <h1>About</h1>
        <p>Hi, we are conecting the world</p>
        <p>may we help you ? <Link to="/contact"> Contact us. </Link></p>
    </Layout>
);


export default AboutPage