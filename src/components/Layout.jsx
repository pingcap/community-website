import React from 'react';
import styles from './Layout.module.scss'
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";


export default function Layout({children, ...rest}) {
  
  return (
    <div className={styles.wrapper}>
      <Navbar transparent={true}/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
