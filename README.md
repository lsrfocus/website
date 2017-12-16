# cooperka.com

[![Build status](https://travis-ci.org/cooperka/react-native-snackbar.svg?branch=master)](https://travis-ci.org/cooperka/react-native-snackbar)

My [personal website](https://cooperka.herokuapp.com).

See also [:sunglasses::cactus:.ws](http://😎🌵.ws) (don't judge, I like emoji).

## Developing

1. `yarn install`
2. `yarn start`
    - It will automatically open <http://localhost:3000/> in your browser
3. `yarn test`

## Publishing

### Heroku

To deploy, simply push to regular master and Heroku will pick it up.

To locally build for production on Heroku:

```bash
yarn run build
```

It uses [create-react-app-buildpack](https://github.com/mars/create-react-app-buildpack) to serve the files.

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
