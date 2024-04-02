import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export default function Acuelle({data}) {
  return (
    <div>
         <div className='Container_App'>
            <Header/>
            <br />
            <Content data={data}/>
            <br />
            <Footer/>
        </div>
    </div>
  )
}
