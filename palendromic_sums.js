//Project Euler Problem #125
//https://www.hackerrank.com/contests/projecteuler/challenges/euler125

window.domready(function () {
    var find_palendrome_class = new Class(find_palendrome);
    find_palendrome = new find_palendrome_class();
});


var find_palendrome = {

//primary function 
search: function (N, d) {
	var self = this;
	this.palendrome_set = [];

	var diff_list = self.getDifferenceList(N, d);

	var sqr_list = [];
	diff_list.each(function (li) {
	    sqr_list.push(Math.pow(li, 2));
	});

	var sum_list = [];
	sqr_list.each(function (li) {
	    //look at each value's sum of previous squares
	    var sum = self.getSum(li, sqr_list);
	    sum_list.push(sum);

	   if (self.isPalendrome(sum)) {
		    this.palendrome_set.push(li);
	    }

	});
	//look at each subset of the sum_list to look for palendrome intervals
	self.getSetDifferences(sum_list);

	//display result
	document.write(this.palendrome_set);
},
    
    //returns bool test for palendrome
isPalendrome: function (number) {
	var str_num = number.toString();
	var array_num = [];
	
	str_num.each(function (s) {
	    array_num.push(s);
	});
	
	var is_palendrome = (array_num[0] == array_num[array_num.length]) ? true : false;
	return is_palendrome;    
},

//creates list of values with passed in differences
getDifferenceList: function (N, d) {
	var diff_array = [];
	for (var i = 0; i < N; i++) {
	    if (i % d == 0) {
		    diff_array.push(i);
	    }
	}
	return diff_array;
},

//adds all previous values in array given a value. kind of like an adding factorial
getSum: function (x, array) {
	if (x == 0) {
	    return 0;
	}
	if (x < 0) {
	    return undefined;
	}
	var sum;
	var x_index = array.indexOf(x);
	array.each(function (index, a) {
	    if (index < x_index) {
		sum += a;
	    }
	});
	return sum;
},

//compares one sum value against all previous sum values looking for palendromes within the set (aka not starting at 1)
getSetDifferences: function (array) {
	var self = this;
	array.each(function (index, a) {
	 for (var i = index - 1; i > -1; --i) {
	    if (self.isPalendrome(a - (array[i]))) {
		    this.palendrome_set.push(a);
		  }
	 }
  });
}

};


//UNIT TESTS

//should return true.
function isPalendromeTest() {
    return this.isPalendrome(959);
}

//should return the list (5, 10, 15, 20)
function getDifferenceListTest() {
    return this.getDifferenceList(20, 5);
}

//should return a six element list where 2 of the elements are (696, 969)
function searchTest() {
    return this.search(1000, 2);
}

//should return 30
function getSumTest() {
    return this.getSum(15, [5, 10, 15]);
}

//should return array with 33 inside
function getSetDifferencesTest() {
    return this.getSetDifferences(36, [3, 36]);
}

