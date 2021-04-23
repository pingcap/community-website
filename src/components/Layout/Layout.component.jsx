import React from 'react';
import { Footer, Header, utils } from '@tidb-community/ui';
import { Location } from '@reach/router';
import { getData } from '@tidb-community/datasource';
import { navigate } from 'gatsby';
import { useDebounce } from 'ahooks';
import { useIntl } from 'react-intl';

import helper from '../../helper';
import styles from './layout.module.scss';

export default function Layout({ children, ...rest }) {
  const intl = useIntl();
  const { locale } = intl;

  const transparentDebounced = useDebounce(false, { wait: 100 });
  const logoImageUrl = helper.getLogoByLocale(locale, transparentDebounced);

  const { header: headerData, footer: footerData } = getData({
    domain: 'contributor.tidb.io',
    locale,
  }).nav;

  const Logo = () => (
    <>
      <div className={styles.logo}>
        <img src={logoImageUrl} alt="TiDB DevGroup" />
      </div>
    </>
  );

  const onNavClick = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank').focus();
    } else {
      navigate(link);
    }
  };

  const onTitleClick = () => {
    navigate('/');
  };

  const headerProps = ({ location }) => ({
    logo: <Logo />,
    navItems: headerData.navItems,
    title: '',
    currentNav: utils.header.getCurrentNav(headerData.navItems, location.pathname),
    onNavClick,
    onTitleClick,
  });

  const footerProps = {
    logo: <Logo />,
    navItems: footerData.navItems,
    title: '',
    icons: footerData.icons,
    onNavClick,
  };

  return (
    <Location>
      {(location) => (
        <>
          <Header {...headerProps(location)} />
          <main>{children}</main>
          <Footer {...footerProps} />
        </>
      )}
    </Location>
  );
}
