# react-use-system-theme

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/react-use-system-theme
[downloads-image]:https://img.shields.io/npm/dm/react-use-system-theme.svg
[npm-image]:https://img.shields.io/npm/v/react-use-system-theme.svg
[travis-url]:https://travis-ci.org/zebateira/react-use-system-theme
[travis-image]:https://img.shields.io/travis/zebateira/react-use-system-theme/master.svg
[codecov-url]:https://codecov.io/gh/zebateira/react-use-system-theme
[codecov-image]:https://img.shields.io/codecov/c/github/zebateira/react-use-system-theme/master.svg
[david-dm-url]:https://david-dm.org/zebateira/react-use-system-theme
[david-dm-image]:https://img.shields.io/david/zebateira/react-use-system-theme.svg
[david-dm-dev-url]:https://david-dm.org/zebateira/react-use-system-theme?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/zebateira/react-use-system-theme.svg

A React Hook to get the system theme (OS theme: light or dark) based on `prefers-color-scheme`. Subscribes to changes as well.

```js
import useSystemTheme from 'react-use-system-theme';

function App() {
    const systemTheme = useSystemTheme();

    return <Page theme={systemTheme || 'dark'} />
}
```


![Demo](https://i.imgur.com/XHbuLIb.gif)


## Install

```sh
$ npm install react-use-system-theme
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Why do you need this?

Initially, support for dark mode apps have been implemented by adding a simple toggle in some settings.
Additionally, some apps have started to support another option "System Default": this is great because the user does not have to change all the apps theme constantly, instead, just change the system theme (mac/windows/linux/android/ios) in one place, and all the apps should change it's theme.

This react hook allows get the currently active theme and to also subscribe to the theme changes in order to allow the ui to update to the new theme.

Usually, the CSS support for this using the media query `(prefers-color-scheme: light)` would be enough, but for `CSS-in-JS` solutions, you probably are getting the theme settings from a js object, so if we can simply use one theme object (`theme.light`/`theme.dark`) given the users system defined theme, we can make our styles simpler.

**Disclaimer**: Browser support for [`prefers-color-scheme` is coming along really well](https://caniuse.com/#feat=prefers-color-scheme), but still, this is an experimental feature: use it wisely!

<!-- ## Demo -->

<!-- You may see a simple demo of `react-use-system-theme` in [https://zebateira.github.io/react-use-system-theme](https://zebateira.github.io/react-use-system-theme/). -->


## Usage

**`useSystemTheme()` hook**:

```js
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useSystemTheme from 'react-use-system-theme';

const theme = {
    light: {
        colors: {
            primary: '#fff'
        }
    },
    dark: {
        colors: {
            primary: '#000'
        }
    }
}

function App() {
    const systemTheme = useSystemTheme();

    return (
        <ThemeProvider theme={ theme[systemTheme || 'dark'] }>
            ...
        </ThemeProvider>
    );
}
```

### Values

The values can be either `dark`, `light` or `null` if the system has no preference for the theme.


## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```


## License

Released under the [MIT License](https://www.opensource.org/licenses/mit-license.php).
