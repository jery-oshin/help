import React from 'react';

import Footer from './footer';
import Header from './header';

import layoutStyles from './layout.module.scss';

const Layout = (props) => (
    <div className={layoutStyles.container}>
        <div className={layoutStyles.content}>
            <Header />
            {
                props.children
            }
        </div>
        
        <Footer />
    </div>
);

export default Layout