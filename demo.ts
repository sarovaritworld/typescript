
/*
=========================================================
PROGRAM 12: REMOVE DUPLICATES FROM AN ARRAY
=========================================================

Difficulty: Easy
Topics: Array, Set, Loops, Searching

PROBLEM:
Given an array of numbers, return a new array containing
only unique elements.

Requirements:
1. Remove duplicate values.
2. Preserve the original insertion order.
3. Do not modify the original array.

Example:
Input:  [1, 2, 2, 3, 4, 4, 5]
Output: [1, 2, 3, 4, 5]

Input:  [5, 3, 5, 2, 3]
Output: [5, 3, 2]

*/


function removeDuplicate(numArr:number[]):number[]{
    let res:number[]=[];
    let seen = new Set<number>();

    for(const num of numArr){
        if(!seen.has(num)){
            seen.add(num)
            res.push(num)
        }

    }    

    return res
}


let input = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicate(input))
