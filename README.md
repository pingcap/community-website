# TiDB Developer Community - website 

[![Netlify Status](https://api.netlify.com/api/v1/badges/bcc3f001-7721-4584-abb8-937c89723fed/deploy-status)](https://app.netlify.com/sites/community-website/deploys)
[![CircleCI Status](https://circleci.com/gh/pingcap/community-website.svg?style=svg)](https://circleci.com/gh/pingcap/community-website)

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

## copy-writing

### /
- src/data/home.js

### /people/${people_level}
#### people list
- https://bots.tidb.io/ti-community-bot/members?level=${people_level}
#### markdown
- src/data/people/${people_level}.md

### /SIG
- https://bots.tidb.io/ti-community-bot/sigs

### /SIG/${sig_name}
- https://bots.tidb.io/ti-community-bot/sigs/${sig_name}

### /incubator
- src/data/en/incubator
### /zh/incubator
- src/data/zh/incubator

### /events
- src/data/events.js

### /ranking
- src/data/ranking.md
- https://bots.tidb.io/ti-community-bot/statistics/contributions?startDate=${startDate}&endDate=${endDate}

## Directory Structure

### images 
部分图片资源通过 `gatsby-source-filesystem` 插件进行索引，
在 component 中通过 graphql 进行查询。

但是也可以通过JavaScript的import或者require直接导入，
通过这种方式导入同样会被webpack打包并且生成带有hash缓存标识符的资源文件。
和 graphql 查询导入的区别在于可能会失去某些优化手段，目前我们的图片尺寸都还不算太大，
为了方便数据管理，可以按需灵活选择两种引入图片的方式

### src/pages 
gatsby.js 默认的页面 component 存放路径，URL路由规则也按照该文件夹下的文件系统进行生成。
pages 目录名禁止修改。否则默认配置下 gatsby.js 将无法找到页面文件。


### src/component 
页面中会重复使用的 component 存放路径。

#### src/component/Container
页面容器组件，用于包裹页面元素，默认情况下居中
其中又分为 normal 容器和 fluid 容器
- normal 容器的宽度通过媒体查询，根据响应式布局的规则进行自适应调整。左右边距为 1rem （实际尺寸请参考源码）
- fluid 容器的宽度为 100% （忽略滚动条的情况下也可以为 100vw）。左右边距通过媒体查询，根据响应式布局的规则进行自适应调整。

#### src/component/Layout
页面布局组件，会在页面的顶部和底部自动导入 header 和 footer

#### src/component/SEO
metadata 数据注入组件，通过 react-helmet 自动像 HTML 文档的 head 部分注入SEO相关标签


### src/styles 
自定义的样式目录，存放公共样式以及 sass 的部分变量声明
#### src/styles/global.scss
该样式会被 `gatsby-browser.js` 注入至全局页面，
因此该样式文件里面的样式均具有副作用，而非存放变量声明的地方

#### src/styles/_variable.scss
该文件存放各种 sass 变量声明，因此该样式文件里面的样式**不允许**有副作用。
请勿在该文件中直接写任何选择器以及样式。

#### src/styles/_typography.scss
该文件存放各类字体排版的 mixin 声明

#### src/styles/_markdown.scss
该文件存放针对 gatsby.js markdown 渲染器自动生成的 HTML 的样式声明

#### src/styles/_responsive.scss
该文件存放有关响应式布局的变量以及媒体查询有关的 mixin 

#### src/styles/_common.scss
该文件为公共import文件，可被任何 sass 样式文件使用 `import` 指令导入。
该文件仅供导入，以及导入其他声明（`@import`指令），因此**不允许**有副作用，也**不允许**有任何声明。
请勿在该文件中直接写任何选择器以及样式。


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

#### src/create-pages/apiHelper.js
存放从 HTTP API 中获取数据的业务逻辑。
#####  async function cacheGitHubAvatar(username)
该函数将通过 github 用户名获取该用户的头像
并且缓存在 `public/cache/github-avatar` 目录中
因此该项目中涉及到需要显示 github 用户头像的逻辑，需要在 gatsby-node.js 中缓存该头像
并且在 HTML 中直接引用该目录下的缓存头像，以免中国大陆境内用户无法正常显示 github 头像

该函数的缓存策略为：判断最后修改时间若距离当前时间大于 7 天则强制重新下载一遍 github 头像并覆盖缓存，否则不作任何操作。


#### src/create-pages/templates
存放用于通过 JavaScript 脚本构建页面的页面模版文件，写法与 pages 中的文件类似。
更多详情可参考 gatsby.js 文档。

### src/helper.js
一些助手函数

### gatsby-*.js

#### gatsby-config.js
存放站点的各种配置以及插件配置，具体请参考 gatsby.js 文档。

#### gatsby-node.js
由于本站点有部分数据为动态生成，需要通过 HTTP API 获取数据并且填充 template 文件，
因此需要 在 gatsby-node 中导入相关业务逻辑。
构建流程如下

1. 导出 onCreateWebpackConfig 函数用于重写 webpack 配置
1. 导出 createPages 函数用于动态创建页面

这些被导出的函数类似于 hook ，将会再 gatsby.js 的构建过程中自动被执行

其中 createPages 又通过 Promise.all 分发了多个异步函数用于从 API 中获取数据并且填充模板，然后动态创建页面


### lang.config.js
语言配置，存放默认语言，以及可使用的语言列表（用于在 footer 中进行语言切换）

## Deploy
在 `.circleci/config.yml` 中存放了 CI 构建配置

当前配置情况如下
- 只构建 main 分支
- 使用 node.js v14.13.0 版本
- 安装 rsync 用于同步构建结果，sshpass 用于在 ssh 中传递密码
- 执行 yarn install 安装依赖
- 执行 yarn download 下载一些来自 github 的 markdown 的文件
- 设置环境变量 GATSBY_CPU_COUNT 用于解决某些情况下的构建 BUG
- 执行 yarn build 构建纯静态 HTML 页面文件
- 执行 rsync 命令将构建好的 HTML 页面文件同步到生产环境服务器中
- 服务器使用 nginx ，配置文件在 `/etc/nginx/nginx.conf` ，
根据配置文件中的 root 项，在 CircleCI 中将构建结果文件同步至对应路径。

该站点当前 nginx 配置如下

    server {
        listen          80;
        listen          [::]:80;
        server_name     developer.tidb.io;
        rewrite ^(.*)$  https://$host$1 permanent; 
        # return 302 https://$host$request_uri;
    }

    server {
        listen       443 ssl;
        server_name  developer.tidb.io;
        root         /usr/share/nginx/html/dev-group;

        ssl_certificate "******";
        ssl_certificate_key "******";
        (more ssl config ...)

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
        }
    }

实际配置以生产环境服务器中的配置文件为准
