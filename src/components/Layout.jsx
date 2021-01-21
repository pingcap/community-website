import React from 'react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";


export default function Layout({children, ...rest}) {
  
  return (
    <div>
      <NavBar transparent={true}/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
