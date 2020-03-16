import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head'

const ContactPage = () => (

    <Layout>
        <Head title="Contact"/>
        <h1>Contact</h1>
        <div>
            <p>Jery Ramirez</p>
            <p>email: jery@oshin.com</p>
            <p>phone number: 809-654-9875</p>
            <p>Twitter: <a href="https://twitter.com" target="_blank">@JeryRamirez</a></p>
        </div>
    </Layout>
);

export default ContactPage