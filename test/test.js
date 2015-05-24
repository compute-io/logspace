/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	logspace = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-logspace', function tests() {

	it( 'should export a function', function test() {
		expect( logspace ).to.be.a( 'function' );
	});

	it( 'should throw an error if the first argument is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				logspace( value, 10 );
			};
		}
	});

	it( 'should throw an error if the second argument is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				logspace( 0, value );
			};
		}
	});

	it( 'should throw an error if the `length` is not a numeric value', function test() {
		var values = [
			'5',
			null,
			true,
			undefined,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				logspace( 0, 10, value );
			};
		}
	});

	it( 'should return a logarithmically spaced array', function test() {
		var a, b, expected, actual;

		a = 0;
		b = 3;

		// Default behavior:
		actual = logspace( a, b );
		assert.strictEqual( actual.length, 10 );
		assert.strictEqual( actual[0], 1 );
		assert.strictEqual( actual[actual.length-1], 1000 );

		// Specify the length:
		actual = logspace( a, b, 10 );
		assert.strictEqual( actual.length, 10 );
		assert.strictEqual( actual[0], 1 );
		assert.strictEqual( actual[actual.length-1], 1000 );

		// Verify correct values:
		actual = logspace( a, b, 4 );
		expected = [ 1, 10, 100, 1000 ];

		assert.deepEqual( actual, expected );

		// Decrement:
		actual = logspace( b, a, 4 );
		expected = [ 1000, 100, 10, 1 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should return an empty array is length is set to 0', function test() {
		assert.deepEqual( logspace(0,10,0), [] );
	});

});
