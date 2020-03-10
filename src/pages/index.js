import React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
    return (
        <div>
            <h1> Hello </h1>
            <h2> Working with Gatsby Js</h2>
            <p>Nedd a developer ? <Link to="/contact"> Contact me. </Link></p>
        </div>
    );
}

export default IndexPage