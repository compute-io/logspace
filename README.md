logspace
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Generates a logarithmically spaced numeric array.


## Installation

``` bash
$ npm install compute-logspace
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var logspace = require( 'compute-logspace' );
```

#### logspace( a, b[, length] )

Generates a logarithmically spaced numeric `array` between `10^a` and `10^b`. If a `length` is not provided, the default output `array` length is `10`.

``` javascript
var arr = logspace( 0, 2, 6 );
// returns [ 1, ~2.5, ~6.31, ~15.85, ~39.81, 100 ]
```


## Notes

The output `array` includes the values `10^a` and `10^b`. __Beware__ of floating point errors, including for the first and last `array` elements.

This function is inspired by MATLAB's [logspace](http://www.mathworks.com/help/matlab/ref/logspace.html) and NumPy's [logspace](http://docs.scipy.org/doc/numpy/reference/generated/numpy.logspace.html).


## Examples

``` javascript
var logspace = require( 'compute-logspace' ),
	out;

// Default behavior:
out = logspace( 0, 3 );
console.log( out.join( '\n' ) );

// Specify length:
out = logspace( 0, 3, 100 );
console.log( out.join( '\n' ) );

// Create an array with decremented values:
out = logspace( 3, 0, 10 );
console.log( out.join( '\n' ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-logspace.svg
[npm-url]: https://npmjs.org/package/compute-logspace

[travis-image]: http://img.shields.io/travis/compute-io/logspace/master.svg
[travis-url]: https://travis-ci.org/compute-io/logspace

[coveralls-image]: https://img.shields.io/coveralls/compute-io/logspace/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/logspace?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/logspace.svg
[dependencies-url]: https://david-dm.org/compute-io/logspace

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/logspace.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/logspace

[github-issues-image]: http://img.shields.io/github/issues/compute-io/logspace.svg
[github-issues-url]: https://github.com/compute-io/logspace/issues
