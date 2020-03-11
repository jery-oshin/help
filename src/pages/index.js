import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import '../styles/index.scss';

const IndexPage = () => {
    return (
        <Layout>
            <h1> Hello </h1>
            <h2> Welcome to OshinStar</h2>
            <p>Need more information ? <Link to="/contact">Contact us</Link></p>
        </Layout>
    );
}

export default IndexPage

// styling gatsby proyect using sass