import React, { useState, useEffect } from 'react';

export default function Header(){

  const headerItems = ['Andrew Tang', 'Software','Bio','Read'];
  const header = headerItems.map((name,index) => {
    return (<h3 className='header-item' id={index}><a href='#'>{name}</a> </h3>)
  })
  
  return(
    <div className = 'header'>
      {header}
    </div>
  )
}