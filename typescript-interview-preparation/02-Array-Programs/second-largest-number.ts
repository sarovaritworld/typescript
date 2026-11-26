
/*
PROGRAM 11: Find Second Largest Number in an Array

TOPIC:
Array | Traversal | Comparison

DIFFICULTY:
Easy-Medium

FREQUENCY:
Frequently Asked Interview Question


PROBLEM STATEMENT:

Given an array of numbers, find the second-largest
DISTINCT number without using the built-in sort() method.

Return null if a second-largest distinct number
does not exist.

EXAMPLES:

[10, 5, 20, 8, 15]  -> 15
[10, 10, 5, 8]      -> 8
[1, 2, 3, 4, 5]     -> 4
[10, 10, 10]        -> null
[5]                 -> null
[]                  -> null
[-10, -5, -20]      -> -10


--------------------------------------------------
APPROACH 1: BRUTE FORCE (SORTING)
--------------------------------------------------

LOGIC:

1. Remove duplicate values using Set.
2. Sort the array in descending order.
3. Check whether at least two distinct numbers exist.
4. Return the second element.
5. Otherwise, return null.

CODE:
*/

function secondLargestBruteForce(
    arr: number[]
): number | null {

    const uniqueNumbers = [...new Set(arr)];

    if (uniqueNumbers.length < 2) {
        return null;
    }

    uniqueNumbers.sort((a, b) => b - a);

    return uniqueNumbers[1];
}

/*
COMPLEXITY:

Time: O(n log n) - Sorting dominates.
Space: O(n) - Set and copied array.


--------------------------------------------------
APPROACH 2: OPTIMIZED (SINGLE TRAVERSAL)
--------------------------------------------------

LOGIC:

1. Initialize largest and secondLargest to -Infinity.
2. Traverse the array once.
3. If current number is greater than largest:
   - Move largest into secondLargest.
   - Update largest with current number.
4. Otherwise, if current number is:
   - Less than largest.
   - Greater than secondLargest.
   Update secondLargest.
5. Return null if secondLargest was never updated.
6. Otherwise, return secondLargest.

CODE:
*/

function secondLargest(
    arr: number[]
): number | null {

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (const num of arr) {

        if (num > largest) {

            secondLargest = largest;
            largest = num;

        } else if (
            num < largest &&
            num > secondLargest
        ) {

            secondLargest = num;
        }
    }

    return secondLargest === -Infinity
        ? null
        : secondLargest;
}

/*
--------------------------------------------------
DRY RUN
--------------------------------------------------

Input:

[10, 5, 20, 8, 15]

Initial values:

largest = -Infinity
secondLargest = -Infinity

Iteration 1: num = 10
largest = 10
secondLargest = -Infinity

Iteration 2: num = 5
largest = 10
secondLargest = 5

Iteration 3: num = 20
largest = 20
secondLargest = 10

Iteration 4: num = 8
largest = 20
secondLargest = 10

Iteration 5: num = 15
largest = 20
secondLargest = 15

FINAL OUTPUT: 15


--------------------------------------------------
COMPLEXITY ANALYSIS
--------------------------------------------------

OPTIMIZED APPROACH:

Time Complexity: O(n)
- Only one traversal of the array.
- Each iteration performs constant-time comparisons.

Space Complexity: O(1)
- Only two variables are maintained.
- No additional array or data structure is required.


--------------------------------------------------
IMPORTANT CONCEPTS
--------------------------------------------------

1. -Infinity:
   Represents a value smaller than every finite number.

2. Single Traversal:
   Process each array element exactly once.

3. Distinct Values:
   The second-largest value must be different
   from the largest value.

4. Looping:
   for...of provides direct access to array values.

5. Conditional Logic:
   if and else if help maintain the two largest values.


--------------------------------------------------
EDGE CASES
--------------------------------------------------

[]                  -> null
[5]                 -> null
[10, 10, 10]        -> null
[10, 10, 5]         -> 5
[10, 5, 20]         -> 10
[-10, -5, -20]      -> -10
[1, 2, 3, 4, 5]     -> 4
[5, 5, 4, 4, 3]     -> 4


--------------------------------------------------
INTERVIEW QUESTIONS
--------------------------------------------------

Q1. Why is the optimized solution O(n)?
A. Because we traverse the array only once.

Q2. Why initialize variables with -Infinity?
A. To handle negative numbers correctly.

Q3. Why do we use two variables?
A. To track the largest and second-largest values
   while traversing the array.

Q4. Why check num < largest?
A. To ensure the second-largest number is distinct.

Q5. Can we solve this without sorting?
A. Yes. A single traversal is sufficient.

Q6. What is the difference between Set and Map?
A. Set stores unique values, whereas Map stores
   key-value pairs.

Q7. What is the space complexity?
A. O(1) for the optimized solution.


--------------------------------------------------
BRUTE FORCE VS OPTIMIZED
--------------------------------------------------

Brute Force:
Time: O(n log n)
Space: O(n)

Optimized:
Time: O(n)
Space: O(1)


--------------------------------------------------
INTERVIEW TAKEAWAYS
--------------------------------------------------

1. Always clarify whether duplicates are allowed.
2. Identify whether the question asks for distinct values.
3. Try solving array problems using a single traversal.
4. Maintain largest and second-largest variables.
5. Consider negative numbers and empty arrays.
6. Avoid sorting when a single-pass solution is possible.

PREFERRED INTERVIEW SOLUTION:

secondLargest()

Time Complexity: O(n)
Space Complexity: O(1)

PROGRAM 11 COMPLETED
*/


// TEST CASES

console.log(secondLargest([10, 5, 20, 8, 15])); // 15

console.log(secondLargest([10, 10, 5, 8])); // 8

console.log(secondLargest([1, 2, 3, 4, 5])); // 4

console.log(secondLargest([10, 10, 10])); // null

console.log(secondLargest([5])); // null

console.log(secondLargest([])); // null

console.log(secondLargest([-10, -5, -20])); // -10
