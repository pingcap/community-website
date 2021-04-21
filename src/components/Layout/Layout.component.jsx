import React from "react";
import { useIntl } from "react-intl";
import { Location } from "@reach/router";
import { Footer, Header, getData, utils } from "@tidb-community/ui";
import { useDebounce } from "ahooks";
import { navigate } from "gatsby";

import helper from "../../helper";
import styles from "./layout.module.scss";

export default function Layout({ children, ...rest }) {
  const intl = useIntl();
  const { locale } = intl;

  const transparentDebounced = useDebounce(false, { wait: 100 });
  const logoImageUrl = helper.getLogoByLocale(locale, transparentDebounced);

  const { footer: footerData, header: headerData } = getData(
    "contributor.tidb.io",
    "",
    locale === "zh" ? "zh" : ""
  );

  const Logo = () => (
    <>
      <div className={styles.logo}>
        <img src={logoImageUrl} alt="TiDB DevGroup" />
      </div>
    </>
  );

  const onNavClick = (link) => {
    if (/^http/.test(link)) {
      window.open(link);
    } else {
      navigate(link);
    }
  };

  const onTitleClick = () => {
    navigate("/");
  };

  const footerProps = {
    logo: <Logo />,
    navItems: footerData.navItems,
    title: "",
    onNavClick,
  };

  const headerProps = ({ location }) => ({
    logo: <Logo />,
    navItems: headerData.navItems,
    title: "",
    currentNav: utils.header.getCurrentNav(
      headerData.navItems,
      location.pathname
    ),
    onNavClick,
    onTitleClick,
  });

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
