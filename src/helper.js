module.exports = {
  getLogoByLocale: (locale, transparent) => {
    const logoImageName = locale === 'en' ? `logo-with-text` : `logo-with-text-${locale}`;
    const logoImageNameTransparent = locale === 'en' ? `logo-with-white-text` : `logo-with-white-text-${locale}`;
    return transparent
      ? `https://download.pingcap.com/community-devgroup/${logoImageNameTransparent}.svg`
      : `https://download.pingcap.com/community-devgroup/${logoImageName}.svg`;
  },
};
