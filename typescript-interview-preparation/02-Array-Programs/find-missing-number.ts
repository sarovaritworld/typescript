
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


=========================================================
APPROACH 1: BRUTE FORCE
=========================================================

LOGIC:

1. Traverse numbers from 0 to n.
2. For each number, check whether it exists in the array.
3. If it does not exist, return that number.

CODE:
*/

function findMissingNumberBruteForce(nums: number[]): number {
  const n = nums.length;

  for (let i = 0; i <= n; i++) {
    if (!nums.includes(i)) {
      return i;
    }
  }

  return -1;
}

/*
TIME COMPLEXITY: O(n²)

Reason:
- The loop runs n + 1 times.
- includes() takes O(n) in the worst case.
- Therefore, overall complexity is O(n²).

SPACE COMPLEXITY: O(1)

Reason:
- No additional data structure is used.

Note:
- The return -1 is a fallback for inputs that do not
  satisfy the problem constraints.


=========================================================
APPROACH 2: OPTIMIZED USING MATHEMATICAL FORMULA
=========================================================

KEY CONCEPT:

Sum of consecutive numbers from 0 to n:

Expected Sum = n * (n + 1) / 2

Missing Number = Expected Sum - Actual Sum

LOGIC:

1. Find the length of the array.
2. Calculate the expected sum using the formula.
3. Calculate the actual sum using reduce().
4. Subtract actual sum from expected sum.
5. Return the difference.

CODE:
*/

function findMissingNumber(nums: number[]): number {
  const n = nums.length;

  // Calculate actual sum of array elements
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // Calculate expected sum from 0 to n
  const expectedSum = (n * (n + 1)) / 2;

  // Difference gives the missing number
  const missing = expectedSum - actualSum;

  return missing;
}

/*
DRY RUN:

Input:
[3, 0, 1]

Step 1:
n = nums.length
n = 3

Step 2:
Expected numbers:
0, 1, 2, 3

Expected Sum:
3 * (3 + 1) / 2
= 12 / 2
= 6

Step 3:
Actual Sum:
3 + 0 + 1
= 4

Step 4:
Missing Number:
6 - 4
= 2

Output:
2


TIME COMPLEXITY: O(n)

Reason:
- reduce() traverses the array once.
- Formula calculation takes O(1).
- Subtraction takes O(1).
- Overall complexity is O(n).

SPACE COMPLEXITY: O(1) AUXILIARY SPACE

Reason:
- Only a fixed number of variables are used.
- No additional array, Map, or Set is created.


=========================================================
APPROACH 3: USING SET
=========================================================

LOGIC:

1. Convert the array into a Set.
2. Traverse numbers from 0 to n.
3. Check whether each number exists in the Set.
4. Return the number that does not exist.

CODE:
*/

function findMissingNumberUsingSet(nums: number[]): number {
  const numSet = new Set(nums);

  for (let i = 0; i <= nums.length; i++) {
    if (!numSet.has(i)) {
      return i;
    }
  }

  return -1;
}

/*
TIME COMPLEXITY: O(n) AVERAGE

Reason:
- Creating the Set takes O(n) average time.
- Checking all numbers takes O(n) average time.

SPACE COMPLEXITY: O(n)

Reason:
- The Set stores the input elements.


=========================================================
EDGE CASES
=========================================================

1. Empty array:
   Input:  []
   Output: 0

2. Single element - missing last:
   Input:  [0]
   Output: 1

3. Single element - missing first:
   Input:  [1]
   Output: 0

4. Missing middle number:
   Input:  [3, 0, 1]
   Output: 2

5. Missing last number:
   Input:  [0, 1, 2, 3]
   Output: 4

6. Unsorted array:
   Input:  [9, 6, 4, 2, 3, 5, 7, 0, 1]
   Output: 8


=========================================================
IMPORTANT TYPESCRIPT / JAVASCRIPT CONCEPTS
=========================================================

1. reduce()

   Used to accumulate array values into a single result.

   Example:

   const sum = [1, 2, 3].reduce(
     (acc, num) => acc + num,
     0
   );

   Output: 6

   acc = accumulator
   num = current element
   0 = initial accumulator value

2. Array.length

   Returns the number of elements in an array.

3. Set

   Stores unique values and provides has() for lookup.

4. Mathematical formula

   Sum of numbers from 0 to n:

   n * (n + 1) / 2


=========================================================
INTERVIEW QUESTIONS AND ANSWERS
=========================================================

Q1. Why does the mathematical approach work?

Answer:
The expected sum contains every number from 0 to n.
The actual sum contains every number except the missing
number. Their difference is therefore the missing number.

Q2. Why is the solution O(n)?

Answer:
The array is traversed once by reduce().
The mathematical calculation takes constant time.

Q3. What is the space complexity?

Answer:
O(1) auxiliary space because only a fixed number of
variables are used.

Q4. Why do we use nums.length as n?

Answer:
The array contains n numbers, but the complete range
contains n + 1 numbers, from 0 through n.

Q5. Can we solve this using Set?

Answer:
Yes. Store the elements in a Set and check which number
from 0 to n is missing. This takes O(n) average time
and O(n) auxiliary space.

Q6. Does the solution modify the original array?

Answer:
No. reduce() only reads the array elements.


=========================================================
TEST CASES
=========================================================
*/

console.log(findMissingNumber([3, 0, 1]));
// Expected: 2

console.log(findMissingNumber([0, 1]));
// Expected: 2

console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Expected: 8

console.log(findMissingNumber([0]));
// Expected: 1

console.log(findMissingNumber([1]));
// Expected: 0

console.log(findMissingNumber([]));
// Expected: 0

/*
=========================================================
FINAL INTERVIEW TAKEAWAYS
=========================================================

1. First understand the expected range of numbers.

2. Use the formula:
   n * (n + 1) / 2

3. Use reduce() to calculate the actual sum.

4. Subtract actual sum from expected sum.

5. Optimized solution:
   Time: O(n)
   Auxiliary Space: O(1)

6. Remember:
   The array length is n, but the expected range
   contains n + 1 numbers.

7. This is a good example of using mathematics to
   optimize an array problem.

=========================================================
*/
