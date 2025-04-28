import React from 'react';
import './Home.css'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

function Home() {

  return (
    <div className='home-area'>
      <Header />
      <div className='home-container'>
        <Sidebar />
      </div>
    </div>
  )
}

export default Home;