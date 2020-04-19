## Features

```txt
- Login / Logout

- Permission Authentication
  - Page permission
  - Directive permission
  - Permission configuration page
  - Two-step login

- Multi-environment build
  - Dev / Stage / Prod

- Global Features
  - I18n
  - Dynamic themes
  - Dynamic sidebar (supports multi-level routing)
  - Dynamic breadcrumb
  - Tags-view (supports right-click operation)
  - Clipboard
  - Svg icons
  - Search
  - Screenfull
  - Settings
  - Mock data / Mock server
  - PWA support

- Components
  - Editors
    - Rich Text Editor
    - Markdown Editor
    - JSON Editor
  - Avatar Upload
  - Back To Top
  - CountTo
  - Dropzone
  - Draggable Dialog
  - Draggable Kanban
  - Draggable List
  - Draggable Select
  - ECharts
  - Mixin
  - SplitPane
  - Sticky

- Table
  - Dynamic Table
  - Draggable Table
  - Inline Edit Table
  - Complex Table

- Excel
  - Export Excel
  - Upload Excel
  - Excel Visualization

- Zip
  - Export zip

- PDF
  - Download pdf

- Dashboard
- Guide Page
- Advanced Example Page
- Error Log
- Error Page
  - 401
  - 404
```

## Project Structure

```bash
├── mock/                      # mock server & mock data
├── public                     # public static assets (directly copied)
│   │── favicon.ico            # favicon
│   │── manifest.json          # PWA config file
│   └── index.html             # index.html template
├── src                        # main source code
│   ├── api                    # api service
│   ├── assets                 # module assets like fonts, images (processed by webpack)
│   ├── components             # global components
│   ├── directives             # global directives
│   ├── filters                # global filter
│   ├── icons                  # svg icons
│   ├── lang                   # i18n language
│   ├── layout                 # global layout
│   ├── pwa                    # PWA service worker related files
│   ├── router                 # router
│   ├── store                  # store
│   ├── styles                 # global css
│   ├── utils                  # global utils
│   ├── views                  # views
│   ├── App.vue                # main app component
│   ├── main.ts                # app entry file
│   ├── permission.ts          # permission authentication
│   ├── settings.ts            # setting file
│   └── shims.d.ts             # type definition shims
├── tests/                     # tests
├── .circleci/                 # automated CI configuration
├── .browserslistrc            # browserslist config file (to support Autoprefixer)
├── .editorconfig              # editor code format consistency config
├── .env.xxx                   # env variable configuration
├── .eslintrc.js               # eslint config
├── babel.config.js            # babel config
├── cypress.json               # e2e test config
├── jest.config.js             # jest unit test config
├── package.json               # package.json
├── postcss.config.js          # postcss config
├── tsconfig.json              # typescript config
└── vue.config.js              # vue-cli config
```

## Project setup

With [yarn](https://yarnpkg.com/lang/en/) or [npm](https://www.npmjs.com/get-npm)

#### Install dependencies

```bash
yarn install
```

#### Compiles and hot-reloads for development

```bash
yarn run serve
```

#### Compiles and minifies for production

```bash
yarn run build:prod
```

#### Lints and fixes files

```bash
yarn run lint
```

#### Run your unit tests

```bash
yarn run test:unit
```

#### Run your end-to-end tests

```bash
yarn run test:e2e
```

#### Generate all svg components

```bash
yarn run svg
```

#### Customize Vue configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
