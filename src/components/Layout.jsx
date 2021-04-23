import React from 'react';
import { Footer, Header, utils } from '@tidb-community/ui';
import { Location } from '@reach/router';
import { getData } from '@tidb-community/datasource';
import { navigate } from 'gatsby';
import { useIntl } from 'react-intl';

import communityLogo from '../../images/community-logo.svg';

export default function Layout({ children, ...rest }) {
  const intl = useIntl();
  const { locale } = intl;

  const { header: headerData, footer: footerData } = getData({
    domain: 'contributor.tidb.io',
    locale,
  }).nav;

  const title = 'TiDB Community';
  const logo = <img alt={title} src={communityLogo} />;

  const onNavClick = (link) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank').focus();
    } else {
      navigate(link);
    }
  };

  const onTitleClick = () => {
    window.open('https://tidb.io', '_blank').focus();
  };

  const headerProps = ({ location }) => ({
    logo,
    title,
    onNavClick,
    onTitleClick,
    navItems: headerData.navItems,
    currentNav: utils.header.getCurrentNav(headerData.navItems, location.pathname),
  });

  const footerProps = {
    logo,
    title,
    onNavClick,
    icons: footerData.icons,
    navItems: footerData.navItems,
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
