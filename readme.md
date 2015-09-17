# is-observ [![Build Status](https://travis-ci.org/bendrucker/is-observ.svg?branch=master)](https://travis-ci.org/bendrucker/is-observ)

> Detect if a value is an [observ](https://github.com/raynos/observ)


## Install

```
$ npm install --save is-observ
```


## Usage

```js
var isObserv = require('is-observ')

isObserv(require('observ')())
//=> true
```

## API

#### `isObserv(value)` -> `boolean`

##### value

*Required*  
Expected Type: `function`

Returns `true` for an observ and `false` otherwise.


## License

MIT © [Ben Drucker](http://bendrucker.me)
