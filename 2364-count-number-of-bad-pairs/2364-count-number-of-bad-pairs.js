/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function(nums) {

	// Intuition:-
	// find pairs where (nums[i] - i === nums[j] - j)
	// from total number of pairs subtract these good pairs,
	// this way it can be solved in O(n), otherwise it'll be O(n*n)

	// Logic:- keep a map/object to keep track of count of (nums[i] -i) encountered till
	// current iteration, this count of (nums[i]-i) will be the count of good pairs where
	// current number will be the second part of the pair.
	let count = 0, obj = {};
	for (let i = 0; i < nums.length; i++) {
		const curr = nums[i] - i;
		if (obj[curr]) {
			count += obj[curr]; // current number forms the second part of these many good pairs
			obj[curr]++; 
		} else obj[curr] = 1;
	}

	return (nums.length * (nums.length - 1)) / 2 - count;

};