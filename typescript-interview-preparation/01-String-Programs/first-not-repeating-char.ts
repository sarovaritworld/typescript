
/*
PROGRAM 10: First Non-Repeating Character
Topic: String | Hash Map | Frequency Counter
Difficulty: Easy–Medium

PROBLEM STATEMENT:
Given a string, find the first character that appears exactly once.
Return null if no non-repeating character exists.

Examples:
"swiss"     -> "w"
"aabbcdde"  -> "c"
"aabbcc"    -> null
"abc"       -> "a"
""          -> null


APPROACH 1: BRUTE FORCE

LOGIC:
1. Traverse each character using an outer loop.
2. Compare it with every other character using an inner loop.
3. If a duplicate is found, mark it as non-unique.
4. If no duplicate is found, return the character.
5. If no unique character exists, return null.

CODE:
*/

function firstNonRepeatingCharBruteForce(
    str: string
): string | null {

    for (let i = 0; i < str.length; i++) {

        let isUnique = true;

        for (let j = 0; j < str.length; j++) {

            if (i !== j && str[i] === str[j]) {
                isUnique = false;
                break;
            }
        }

        if (isUnique) {
            return str[i];
        }
    }

    return null;
}

/*
COMPLEXITY:
Time: O(n²) - Nested loops.
Space: O(1) - Constant extra space.


APPROACH 2: OPTIMIZED USING MAP

LOGIC:
1. Create a Map to store character frequencies.
2. Traverse the string and count each character.
3. Traverse the string again in original order.
4. Return the first character whose frequency is 1.
5. If no unique character exists, return null.

CODE:
*/

function firstNonRepeatingChar(
    str: string
): string | null {

    const charCount = new Map<string, number>();

    // PASS 1: Count character frequency
    for (const char of str) {

        charCount.set(
            char,
            (charCount.get(char) ?? 0) + 1
        );
    }

    // PASS 2: Find first non-repeating character
    for (const char of str) {

        if (charCount.get(char) === 1) {
            return char;
        }
    }

    return null;
}

/*
DRY RUN:

Input: "swiss"

PASS 1: Frequency Map

s -> 3
w -> 1
i -> 1

PASS 2: Find first unique character

s -> Frequency 3 -> Skip
w -> Frequency 1 -> Return

Output: "w"


COMPLEXITY:
Time: O(n) - Two traversals of the string.
Space: O(k) - Map stores k distinct characters.


IMPORTANT TYPESCRIPT CONCEPTS:

1. Map<string, number>
   Stores character-frequency pairs.

2. Map.set()
   Adds or updates a key-value pair.

3. Map.get()
   Retrieves the value associated with a key.

4. Nullish Coalescing (??)
   Provides a default value when the result is null
   or undefined.

5. for...of
   Iterates over string characters.


EDGE CASES:

""        -> null
"a"       -> "a"
"aabb"    -> null
"abc"     -> "a"
"swiss"   -> "w"
"aabbc"   -> "c"
"aAbB"    -> "a"

Note: Comparison is case-sensitive.


INTERVIEW QUESTIONS:

Q1. Why is brute force O(n²)?
A. Because each character is compared against the
   entire string using nested loops.

Q2. Why is Map approach O(n)?
A. Because the string is traversed twice, with
   average O(1) Map operations.

Q3. Why do we need two passes?
A. First pass counts frequencies. Second pass
   preserves original order and finds the answer.

Q4. Why use Map?
A. It provides convenient key-value frequency storage.

Q5. Can we use an object instead of Map?
A. Yes, an object can also store character frequencies.

Q6. Does Map maintain insertion order?
A. Yes, JavaScript Map preserves key insertion order.


BRUTE FORCE VS OPTIMIZED:

Brute Force:
Time: O(n²)
Space: O(1)

Optimized Map:
Time: O(n)
Space: O(k)


INTERVIEW TAKEAWAYS:

1. Understand nested-loop comparison.
2. Learn frequency counting using Map.
3. Understand two-pass string traversal.
4. Know the difference between O(n²) and O(n).
5. Always consider empty strings and duplicate characters.

FINAL PREFERRED SOLUTION:
firstNonRepeatingChar()

Time Complexity: O(n)
Space Complexity: O(k)

PROGRAM 10 COMPLETED
*/

// TEST CASES
console.log(firstNonRepeatingChar("swiss"));    // "w"
console.log(firstNonRepeatingChar("aabbcdde")); // "c"
console.log(firstNonRepeatingChar("aabbcc"));   // null
console.log(firstNonRepeatingChar("abc"));      // "a"
console.log(firstNonRepeatingChar(""));         // null
console.log(firstNonRepeatingChar("a"));        // "a"
