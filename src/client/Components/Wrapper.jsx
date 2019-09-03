import React, { useState,useEffect } from 'react';
import Header from './Header.jsx'
import Body from './Body.jsx';
import Footer from './Footer.jsx'

function Wrapper(){
  const [currentTab, updateHeader] = useState({currentTab: 'Andrew Tang'});
  
  return (
  <div id = 'wrapper'>
    <Header/>
    <Body/>
    <Footer/>
  </div>
  )

}


export default Wrapper