# LsrFocus.com

[![Build status](https://travis-ci.org/lsrfocus/website.svg?branch=master)](https://travis-ci.org/lsrfocus/website)

## Developing

1. `yarn install`
2. `yarn start`
    - It will automatically open <http://localhost:3000/> in your browser
3. `yarn test`

## Publishing

### Firebase

To deploy manually:

```bash
yarn run deploy
```

### Anything else

To build locally for production:

```bash
yarn run build:snapshot
```

It uses [react-snapshot](https://github.com/geelen/react-snapshot)
to generate static HTML pages that can be served much more easily.
