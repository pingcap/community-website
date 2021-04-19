import React from 'react';
import { Location } from '@reach/router';
import styles from './Layout.module.scss'
import {useIntl} from "react-intl";
import {Footer,Header,getData,utils} from '@tidb-community/ui'
import helper from '../helper'
import { useDebounce } from 'ahooks'
import { navigate } from "gatsby"


export default function Layout({children, ...rest}) {

  const intl = useIntl()
  const locale = intl.locale

  const transparentDebounced = useDebounce(false, {wait: 100})
  const logoImageUrl = helper.getLogoByLocale(locale, transparentDebounced)

  const { footer: footerData, header: headerData } = getData('contributor.tidb.io', '', locale === 'zh' ? 'zh' : '')

  const Logo = () => (<>
    <div className={styles.logo}>
      <img src={logoImageUrl} alt="TiDB DevGroup"/>
    </div>
  </>)

  const onNavClick = link => {
    if (/^http/.test(link)) {
      window.open(link)
    } else {
      navigate(link)
    }
  }

  const onTitleClick = () => {
    navigate('/')
  }

  const footerProps = {
    logo: <Logo/>,
    navItems: footerData.navItems,
    title: '',
    onNavClick,
  }

  const headerProps = ({ location }) => ({
    logo: <Logo/>,
    navItems: headerData.navItems,
    title: '',
    currentNav: utils.header.getCurrentNav(headerData.navItems, location.pathname),
    onNavClick,
    onTitleClick,
  })

  return (
    <div>
      <Location>
        {location => (<>
          <Header {...headerProps(location)}/>
          <main>
            {children}
          </main>
          <Footer {...footerProps}/>
        </>)}
      </Location>
    </div>
  )
}
