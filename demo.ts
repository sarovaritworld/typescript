/*
=========================================================
PROGRAM 13: FIND THE MISSING NUMBER
=========================================================

Difficulty: Easy - Medium

Topics:
- Array
- reduce()
- Mathematics
- Loops
- Time and Space Complexity

PROBLEM:

Given an array containing n distinct numbers from the
range 0 to n, find the one missing number.

Exactly one number is missing.

Example:

Input:  [3, 0, 1]
Output: 2

Input:  [0, 1]
Output: 2

Input:  [9, 6, 4, 2, 3, 5, 7, 0, 1]
Output: 8

Requirements:
1. Find the missing number.
2. Do not modify the original array.
3. Aim for O(n) time complexity.
4. Aim for O(1) auxiliary space complexity.

*/


function findMissNumber(nums:number[]):number{
    let n = nums.length;

    let actualSum:number = nums.reduce((sum, num)=>sum+num, 0)
    let expectedSum:number = (n*(n+1))/2;

    return expectedSum-actualSum;
}

let input = [2,3,1,0];

console.log(findMissNumber(input))
