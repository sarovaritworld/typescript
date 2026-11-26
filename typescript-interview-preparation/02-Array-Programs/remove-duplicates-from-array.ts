
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


=========================================================
APPROACH 1: BRUTE FORCE
=========================================================

LOGIC:

1. Create an empty array called unique.
2. Traverse the original array.
3. Check whether the current number exists in unique.
4. If it does not exist, push it into unique.
5. Return unique.

WHY USE includes()?

includes() checks whether an element already exists
inside an array.

CODE:
*/

function removeDuplicatesBruteForce(arr: number[]): number[] {
  const unique: number[] = [];

  for (const num of arr) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }

  return unique;
}

/*
DRY RUN:

Input:
[1, 2, 2, 3, 4, 4, 5]

Iteration   Current   Unique Array
----------------------------------
1           1         [1]
2           2         [1, 2]
3           2         [1, 2]
4           3         [1, 2, 3]
5           4         [1, 2, 3, 4]
6           4         [1, 2, 3, 4]
7           5         [1, 2, 3, 4, 5]

Output:
[1, 2, 3, 4, 5]

TIME COMPLEXITY: O(n²)

Reason:
- Outer loop traverses n elements.
- includes() can search up to n elements.
- Therefore, worst-case complexity is O(n²).

SPACE COMPLEXITY: O(n)

Reason:
- The unique array can contain up to n elements.


=========================================================
APPROACH 2: OPTIMIZED USING SET
=========================================================

WHAT IS SET?

Set is a JavaScript built-in data structure that stores
unique values.

Important properties:
1. Duplicate values are automatically ignored.
2. Insertion order is preserved.
3. has() checks whether a value exists.
4. add() inserts a value.
5. Set provides average O(1) lookup and insertion.

CODE:
*/

function removeDuplicates(arr: number[]): number[] {
  return [...new Set(arr)];
}

/*
HOW DOES THIS WORK?

Step 1:
new Set(arr)

Creates a Set from the original array.

Input:
[1, 2, 2, 3, 4, 4, 5]

Set:
{1, 2, 3, 4, 5}

Step 2:
[...new Set(arr)]

The spread operator converts the Set back into an array.

Output:
[1, 2, 3, 4, 5]


TIME COMPLEXITY: O(n) average

Reason:
- Creating the Set processes n elements.
- Converting the Set back into an array processes
  the unique elements.
- Both operations are linear on average.

SPACE COMPLEXITY: O(n)

Reason:
- Set stores unique elements.
- A new array is created from the Set.


=========================================================
APPROACH 3: OPTIMIZED USING SET + LOOP
=========================================================

This approach makes the internal logic more explicit.

CODE:
*/

function removeDuplicatesUsingSetLoop(arr: number[]): number[] {
  const seen = new Set<number>();
  const result: number[] = [];

  for (const num of arr) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }

  return result;
}

/*
LOGIC:

1. Create an empty Set called seen.
2. Create an empty result array.
3. Traverse the original array.
4. Check whether the current number exists in seen.
5. If not:
   - Add it to seen.
   - Push it into result.
6. Return result.

TIME COMPLEXITY: O(n) average
SPACE COMPLEXITY: O(n)

This version is useful when an interviewer asks you
to implement the logic without using [...new Set(arr)].


=========================================================
EDGE CASES
=========================================================

1. Empty array:
   Input:  []
   Output: []

2. Single element:
   Input:  [5]
   Output: [5]

3. All elements duplicated:
   Input:  [1, 1, 1, 1]
   Output: [1]

4. No duplicates:
   Input:  [1, 2, 3, 4]
   Output: [1, 2, 3, 4]

5. Non-adjacent duplicates:
   Input:  [5, 3, 5, 2, 3]
   Output: [5, 3, 2]

6. Negative numbers:
   Input:  [-1, -2, -1, 3]
   Output: [-1, -2, 3]

7. Zero:
   Input:  [0, 1, 0, 2]
   Output: [0, 1, 2]

8. Original array:
   The original array must remain unchanged.


=========================================================
IMPORTANT TYPESCRIPT / JAVASCRIPT CONCEPTS
=========================================================

1. Set<number>
   Creates a Set that stores number values.

2. includes()
   Checks whether an array contains a value.

3. has()
   Checks whether a Set contains a value.

4. add()
   Adds a value to a Set.

5. Spread operator (...)
   Converts an iterable into individual elements.
   Example: [...new Set(arr)]

6. for...of
   Iterates over values in an array.


=========================================================
INTERVIEW QUESTIONS AND ANSWERS
=========================================================

Q1. What is the difference between Array and Set?

Answer:
Array can contain duplicate elements.
Set stores only unique values.

Q2. Does Set preserve insertion order?

Answer:
Yes. Set iterates in insertion order.

Q3. What is the time complexity of includes()?

Answer:
O(n) in the worst case because it may scan
the entire array.

Q4. Why is the brute-force approach O(n²)?

Answer:
For every element, includes() may scan the
result array containing previously visited elements.

Q5. Why is Set considered optimized?

Answer:
Set provides average O(1) lookup and insertion,
making the overall solution O(n) on average.

Q6. Does the solution modify the original array?

Answer:
No. It creates a new Set and a new array.

Q7. What happens if the input is empty?

Answer:
An empty array is returned.


=========================================================
TEST CASES
=========================================================
*/

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(removeDuplicates([1, 1, 1, 1]));
// [1]

console.log(removeDuplicates([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(removeDuplicates([]));
// []

console.log(removeDuplicates([5, 3, 5, 2, 3]));
// [5, 3, 2]

console.log(removeDuplicates([-1, -2, -1, 3]));
// [-1, -2, 3]

/*
=========================================================
FINAL INTERVIEW TAKEAWAYS
=========================================================

1. Brute force:
   Use includes() with a result array.
   Time: O(n²)
   Space: O(n)

2. Optimized:
   Use Set.
   Time: O(n) average
   Space: O(n)

3. Set automatically removes duplicates.

4. Set preserves insertion order.

5. Prefer understanding the Set + loop approach
   rather than memorizing [...new Set(arr)].

6. In an interview, explain the brute-force approach
   first, then optimize it using Set.

=========================================================
*/
