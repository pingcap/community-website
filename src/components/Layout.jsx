import React, { useEffect, useState } from 'react'
import { Footer, Header, UserProfile, utils } from '@tidb-community/ui';
import { Location } from '@reach/router';
import { getData, api } from '@tidb-community/datasource';
import { navigate } from 'gatsby';
import { useIntl } from 'react-intl';

import communityLogo from '../../images/community-logo.svg';

export default function Layout({ children, ...rest }) {
  const intl = useIntl();
  const { locale } = intl;

  const [meData, setData] = useState(undefined)

  useEffect(() => {
    api.me().then(({data}) => setData(data)).catch(() => {})
  }, [children])

  const { header: headerData, footer: footerData } = getData({
    domain: 'contributor.tidb.io',
    locale,
    env: process.env.NEXT_PUBLIC_RUNTIME_ENV,
    meData,
  }).nav;

  const { loginUrl, logoutUrl, userProfileNavItems } = headerData

  const title = 'TiDB Community';
  const logo = <img alt={title} src={communityLogo} />;

  const onNavClick = ({ link }) => {
    if (link.startsWith('http')) {
      window.open(link, '_blank').focus();
    } else {
      navigate(link);
    }
  };

  const onTitleClick = () => {
    window.open('https://tidb.io', '_blank').focus();
  };

  const headerProps = ({ location }) => {
    const currentNav = utils.header.getCurrentNav(headerData.navItems, location.pathname)

    const doLogin = (redirectUrl) => {
      window.open(`${loginUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? location.href)}`, '_top');
    };

    const doLogout = (redirectUrl) => {
      window.open(`${logoutUrl}?redirect_to=${encodeURIComponent(redirectUrl ?? location.href)}`, '_top');
    };

    return {
      logo,
      title,
      onNavClick,
      onTitleClick,
      navItems: headerData.navItems,
      currentNav,
      userProfileSlot: (
        <UserProfile
          onNavClick={onNavClick}
          onLoginClick={() => doLogin()}
          onLogoutClick={() => doLogout()}
          currentNav={currentNav}
          items={userProfileNavItems}
          avatarUrl={meData?.avatar_url}
          locale={locale}
          showBadge={meData?.org_invitations.reduce((pre, cur) => pre + (cur.valid ? 1 : 0), 0) > 0}
        />
      )
    }
  };

  const footerProps = {
    logo,
    title,
    onNavClick: (link) => onNavClick({ link }),
    icons: footerData.icons,
    navItems: footerData.navItems,
  };

  return (
    <Location>
      {(location) => (
        <>
          <div className='tidb-community-ui'>
            <Header {...headerProps(location)} />
          </div>
          <main>{children}</main>
          <div className='tidb-community-ui'>
            <Footer {...footerProps} />
          </div>
        </>
      )}
    </Location>
  );
}
