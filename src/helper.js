module.exports = {
  convertToUpperCamelCase: (str) => {
    switch (typeof str) {
      case "number":
      case "boolean": return '' + str
      case "string": {
        const reg = /[_-]([a-z])/g;
        str = str.substring(0,1).toUpperCase() + str.substring(1)
        return str.replace(reg, (a, b) => ' ' + b.toUpperCase())
      }
      default: return ''
    }
  },
  
  getLogoByLocale: (locale, transparent) => {
    const logoImageName = locale === 'en' ? `logo-with-text` : `logo-with-text-${locale}`
    const logoImageNameTransparent = locale === 'en' ? `logo-with-white-text` : `logo-with-white-text-${locale}`
    return transparent ? `https://download.pingcap.com/community-devgroup/${logoImageNameTransparent}.svg` : `https://download.pingcap.com/community-devgroup/${logoImageName}.svg`
  }
}
