import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';

const ContactPage = () => (

    <div>
        <Header />
        <h1>Contact</h1>
        <div>
            <p>Jery Ramirez</p>
            <p>email: jery@gmail.com</p>
            <p>phone number: 809-654-9875</p>
            <p>Twitter: <a href="https://twitter.com" target="_blank">@JeryRamirez</a></p>
        </div>
        <Footer />
    </div>
);

export default ContactPage