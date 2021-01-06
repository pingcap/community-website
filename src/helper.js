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
  }
}
