'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */


//{Feature} should {test}
describe('Basic math', function() {
	//tests
	it('should add numbers correctly', function() {
		//javascript
		let result = 1+1;
		
		//assertion
		expect(result).toEqual(2); 
   });

});

describe('greet() function', function() {
	it('should greet me properly', function() {
		expect(greet("Minsu")).toMatch("Hello,Minsu");
	});
});

describe('inverCase() function', function() {
	it('should invert case', function() {
		expect(invertCase("Hello Everyone")).toMatch("hELLO eVERYONE");
	});
});