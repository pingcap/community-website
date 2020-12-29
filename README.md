<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  TiDB Developer Community - website 
</h1>

[![Netlify Status](https://api.netlify.com/api/v1/badges/bcc3f001-7721-4584-abb8-937c89723fed/deploy-status)](https://app.netlify.com/sites/community-website/deploys)


## 🚀 Quick start
    git clone git@github.com:pingcap/community-website.git
    cd community-website
    yarn start

## Data and i18n
`src/data` is the data directory, 
there are some JavaScript files only export an object with i18n copywriting.

Its content likes 
    
    {
        en: {...},
        zh: {...},
    }

## Directory Structure

### images 
部分图片资源通过 `gatsby-source-filesystem` 插件进行索引，
在 component 中通过 graphql 进行查询。


### src/pages 
gatsby.js 默认的页面 component 存放路径，URL路由规则也按照该文件夹下的文件系统进行生成。
pages 目录名禁止修改。否则默认配置下 gatsby.js 将无法找到页面文件。


### src/component 
页面中会重复使用的 component 存放路径。


### src/styles 
自定义的样式目录，存放公共样式以及 sass 的部分变量声明
#### src/styles/global.scss
该样式会被 `gatsby-browser.js` 注入至全局页面，
因此该样式文件里面的样式均具有副作用，而非存放变量声明的地方

#### src/styles/_variable.scss
该文件存放各种 sass 变量声明，因此该样式文件里面的样式**不允许**有副作用。
请勿在该文件中直接写任何选择器以及样式。

#### src/styles/_common.scss
该文件为公共import文件，可被任何 sass 样式文件使用 `import` 指令导入。
该文件仅供导入，因此**不允许**有副作用。请勿在该文件中直接写任何选择器以及样式。


### src/data
存放页面文案，统一使用JavaScript文件，以便使用注释等 ECMAScript 6 语法具有的高级特性。
这些文件仅仅只能使用 `export default` 默认导出一个js object，该 object 的结构应该为

    {
        // 该页面对应的英文文案
        en: {...},
        // 该页面对应的中文文案
        zh: {...},
    }

请注意，这里的 `en` 和 `zh` 必须符合 locale 缩写规范，
否则 `react-intl` 将无法正确根据当前客户端的首选语言选择合适的文案数据填充页面以及渲染。


### src/create-pages
gatsby.js 框架支持直接在 `src/pages` 目录中存放通过 React 组件导出的页面文件，
也支持在 build 过程中通过 JavaScript 脚本构建页面。

该目录存放用于通过 JavaScript 构建页面的脚本文件。
这些脚本文件将在 `gatsby-node.js` 中导出的 `createPages` 函数所调用，用于在 build 时生成页面。

通常我们的页面大致结构都一致，只是数据或者国际化文案不一样。
因此可以通过同一套 template 生成不同语言或者不同数据的页面。

#### src/create-pages/wrapPage.js
存放 React 根组件被包裹的标签，通常用于注入 React.Context ，
例如 react-intl 的 provider 需要在此处注入

#### src/create-pages/templates
存放用于通过 JavaScript 脚本构建页面的页面模版文件，写法与 pages 中的文件类似。
更多详情可参考 gatsby.js 文档。


### gatsby-*.js

#### gatsby-config.js
存放站点的各种配置以及插件配置，具体请参考 gatsby.js 文档。

### lang.config.js
语言配置，存放默认语言，以及可使用的语言列表（用于在 footer 中进行语言切换）
