
# create-element

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Micro utility for creating DOM elements (svg or regular).

## Installation

    $ npm install @f/create-element

## Usage

You can create regular elements (e.g. `div`, `span`), and you can create SVG elements (e.g. `circle`, `tspan`). The recognized svg elements are listed [here](https://github.com/micro-js/svg-elements).

```js
var createElement = require('@f/create-element')

var div = createElement('div')
var circle = createElement('circle')
```

## API

### createElement(tag)

- `tag` - The name of the element you want to create

**Returns:** A DOM node of type `tag` created in the appropriate namespace.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/create-element.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/create-element
[git-image]: https://img.shields.io/github/tag/micro-js/create-element.svg
[git-url]: https://github.com/micro-js/create-element
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/create-element.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/create-element
