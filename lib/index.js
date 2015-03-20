/**
*
*	COMPUTE: logspace
*
*
*	DESCRIPTION:
*		- Generates a logarithmically spaced numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );


// LOGSPACE //

/**
* FUNCTION: logspace( a, b[, length] )
*	Generates a logarithmically spaced numeric array.
*
* @param {Number} a - exponent of start value
* @param {Number} b - exponent of end value
* @param {Number} [length] - length of output array (default: 10)
* @returns {Array} logarithmically spaced numeric array
*/
function logspace( a, b, len ) {
	var arr,
		end,
		tmp,
		d;

	if ( !isNumber( a ) ) {
		throw new TypeError( 'logspace()::invalid input argument. Exponent of start value must be numeric. Value: `' + a + '`.' );
	}
	if ( !isNumber( b ) ) {
		throw new TypeError( 'logspace()::invalid input argument. Exponent of stop value must be numeric. Value: `' + b + '`.' );
	}
	if ( arguments.length < 3 ) {
		len = 10;
	} else {
		if ( !isNonNegativeInteger( len ) ) {
			throw new TypeError( 'logspace()::invalid input argument. Length must be a positive integer. Value: `' + len + '`.' );
		}
		if ( len === 0 ) {
			return [];
		}
	}
	// Calculate the increment:
	end = len - 1;
	d = ( b-a ) / end;

	// Build the output array...
	arr = new Array( len );
	tmp = a;
	arr[ 0 ] = Math.pow( 10, tmp );
	for ( var i = 1; i < end; i++ ) {
		tmp += d;
		arr[ i ] = Math.pow( 10, tmp );
	}
	arr[ end ] = Math.pow( 10, b );
	return arr;
} // end FUNCTION logspace()


// EXPORTS //

module.exports = logspace;
