
/*
===========================================================
PROGRAM 09: CHARACTER FREQUENCY
===========================================================

Problem:
Count the number of occurrences of every character in a string.

Example:
Input: "programming"

Output:
{
    p: 1,
    r: 2,
    o: 1,
    g: 2,
    a: 1,
    m: 2,
    i: 1,
    n: 1
}

===========================================================
APPROACH 1: UNIQUE CHARACTERS + REPEATED TRAVERSAL
===========================================================

Logic:
1. Find all unique characters.
2. Initialize their counts to zero.
3. For every unique character, traverse the original string.
4. Increment the count whenever a match is found.

Time Complexity: O(n²)
Space Complexity: O(k)

This is the approach proposed in my first attempt.
It works but is not optimal.

===========================================================
APPROACH 2: SINGLE TRAVERSAL USING OBJECT
(RECOMMENDED)
===========================================================

Logic:
1. Create an empty frequency object.
2. Traverse the string character by character.
3. If the character exists, increment its count.
4. Otherwise, initialize its count to 1.
5. Return the frequency object.

*/

function charFrequency(str: string): Record<string, number> {

    const frequency: Record<string, number> = {};

    for (const char of str) {

        if (frequency[char]) {
            frequency[char]++;
        } else {
            frequency[char] = 1;
        }
    }

    return frequency;
}

// Test cases
console.log(charFrequency("programming"));
console.log(charFrequency("hello"));
console.log(charFrequency("aaa"));
console.log(charFrequency("abc"));
console.log(charFrequency(""));
console.log(charFrequency("aA"));
console.log(charFrequency("a a"));
console.log(charFrequency("😊😊"));

/*
Time Complexity: O(n)
Space Complexity: O(k)

===========================================================
APPROACH 3: USING MAP
===========================================================

*/

function charFrequencyMap(str: string): Map<string, number> {

    const frequency = new Map<string, number>();

    for (const char of str) {

        if (frequency.has(char)) {
            frequency.set(char, frequency.get(char)! + 1);
        } else {
            frequency.set(char, 1);
        }
    }

    return frequency;
}

console.log(charFrequencyMap("programming"));

/*
Time Complexity: O(n)
Space Complexity: O(k)

===========================================================
APPROACH 4: FIND THE MOST FREQUENT CHARACTER
===========================================================

Problem:
Find the character that occurs the maximum number of times.

Example:
Input: "programming"
Output: "r" or "g" or "m"

All three characters have a frequency of 2.

*/

function mostFrequentCharacter(str: string): string | null {

    const frequency = charFrequency(str);

    let maxCount = 0;
    let maxChar: string | null = null;

    for (const char in frequency) {

        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentCharacter("programming"));

/*
Time Complexity: O(n)
Space Complexity: O(k)

Note:
If multiple characters have the same maximum frequency,
this returns the first one encountered during object iteration.
*/

/*
===========================================================
EDGE CASES
===========================================================

"hello"  -> h:1, e:1, l:2, o:1
"aaa"    -> a:3
"abc"    -> a:1, b:1, c:1
""       -> {}
"aA"     -> a:1, A:1
"a a"    -> a:2, space:1
"12321"  -> 1:2, 2:2, 3:1
"😊😊"   -> 😊:2

===========================================================
COMPLEXITY SUMMARY
===========================================================

Approach 1:
Time: O(n²)
Space: O(k)

Approach 2:
Time: O(n)
Space: O(k)

Approach 3:
Time: O(n)
Space: O(k)

Approach 4:
Time: O(n)
Space: O(k)

===========================================================
INTERVIEWER COUNTER QUESTIONS
===========================================================

Q1. Why is the first approach O(n²)?
Answer:
Because we traverse the original string separately for
each unique character.

Q2. How can you optimize the solution?
Answer:
Use an object or Map and update the frequency in one traversal.

Q3. What is the space complexity?
Answer:
O(k), where k is the number of unique characters.

Q4. How do you ignore uppercase/lowercase differences?
Answer:
Convert the string to lowercase before counting.

Q5. How do you count only alphabetic characters?
Answer:
Filter the input to include only alphabetic characters.

Q6. Can you use Map instead of an object?
Answer:
Yes. Map provides has(), get(), and set() methods.

Q7. How do you find the most frequent character?
Answer:
First calculate character frequencies, then find the
character with the maximum count.

Q8. What does for...of do?
Answer:
It iterates over the values of an iterable, such as
characters in a string.

Q9. What is the difference between str.length and
the number of unique characters?
Answer:
str.length counts the string's UTF-16 code units.
The number of unique characters is the number of distinct
keys in the frequency object.

===========================================================
IMPORTANT TYPESCRIPT CONCEPTS
===========================================================

1. Record<string, number>
   Represents an object with string keys and number values.

2. for...of
   Iterates over string characters by Unicode code point.

3. Object
   Stores key-value pairs.

4. Map
   Stores key-value pairs and supports different key types.

5. Increment operator (++)
   Increases a numeric value by one.

6. Conditional statement
   Checks whether a character already exists.

7. Function return type
   Record<string, number> specifies the output type.

===========================================================
FINAL INTERVIEW TAKEAWAY
===========================================================

My initial approach:
Unique characters + repeated traversal = O(n²).

Optimized approach:
Single traversal + frequency object = O(n).

Preferred interview solution:
Approach 2 using an object.

Remember:
Identify the data structure that allows you to solve
the problem in a single traversal.
===========================================================
*/
