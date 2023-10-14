import React from 'react';
import Navbar from '../components/Navbar';

import Heroimg2 from '../components/Heroimg2';
import Footer from '../components/Footer';

import Web1 from '../components/Web1';

const project = () => {
  return (
    <div>
        <Navbar />
        <Heroimg2 heading="PROJECT" para="some of my recent projects"/>
        <Web1/>
        <Footer/>
       
    </div>
  )
}

export default project