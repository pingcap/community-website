import Helmet from 'react-helmet';
import React, { useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';

export default function Layout({ children }) {
  const ref = useRef(null);
  const [isReady, setIsReady] = useState(false);
  const intl = useIntl();
  const { locale } = intl;

  useEffect(() => {
    if (ref) {
      setIsReady(true);
    }
  }, [ref]);

  return (
    <>
      <Helmet defer>
        <script crossorigin src="https://unpkg.com/react@17.0.2/umd/react.production.min.js" />
        <script crossorigin src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js" />
        <script crossorigin src="https://unpkg.com/react-is@17.0.2/umd/react-is.production.min.js" />
        <script crossorigin src="https://unpkg.com/styled-components@5.3.0/dist/styled-components.min.js" />
        <link rel="stylesheet" href="https://tidb.io/scripts/fonts.css" />
        <link rel="stylesheet" href="https://tidb.io/scripts/header-footer.css" />
        <script src="https://tidb.io/scripts/header-footer.js" />
        {isReady && (
          <script defer>{`
            _tidb.uiScripts.headerFooter.init({
              headerEl: document.getElementById('header'),
              footerEl: document.getElementById('footer'),
              locale: '${locale}'
            });
          `}</script>
        )}
      </Helmet>

      <div id="header" />
      <main>{children}</main>
      <div ref={ref} id="footer" />
    </>
  );
}
