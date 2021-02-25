import React from 'react';
import NavBar from "./NavBar/NavBar";
import Footer from "./Footer/Footer";
import {useIntl} from "react-intl";


export default function Layout({children, ...rest}) {
  const intl = useIntl()
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
