/*
============================================================
TYPESCRIPT INTERVIEW PREPARATION
TOPIC: STRING PROGRAMS
PROGRAMS: 01 TO 07
============================================================
PROGRAM 01: REVERSE A STRING
PROGRAM 02: Reverse String Using Two Pointers
PROGRAM 03: Reverse Each Word in a Sentence
PROGRAM 04: Reverse String Using Recursion
PROGRAM 05: Reverse Only Letters
PROGRAM 06: Check Palindrome
PROGRAM 07: Reverse String Containing Emojis

============================================================
*/


/*
========================================================
PROGRAM 01: REVERSE A STRING
========================================================

INTERVIEW QUESTION:
Write a TypeScript function to reverse a given string
without using the built-in reverse() method.

INPUT:
"hello"

OUTPUT:
"olleh"

--------------------------------------------------------
APPROACH:
1. Find the length of the input string.
2. Start traversing from the last valid index.
3. Use charAt() to get each character.
4. Append each character to a new string.
5. Return the reversed string.

--------------------------------------------------------
SOLUTION 1: USING FOR LOOP AND charAt()
*/

function reverseString(str: string): string {

    let maxLen = str.length;
    let result: string = "";

    for (let i = maxLen - 1; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}

console.log(reverseString("hello"));     // olleh
console.log(reverseString("Playwright")); // thgiryalP
console.log(reverseString("12345"));      // 54321

/*
--------------------------------------------------------
DRY RUN:

Input = "hello"

String length = 5
Last valid index = 5 - 1 = 4

Iteration 1: i = 4, character = o, result = "o"
Iteration 2: i = 3, character = l, result = "ol"
Iteration 3: i = 2, character = l, result = "oll"
Iteration 4: i = 1, character = e, result = "olle"
Iteration 5: i = 0, character = h, result = "olleh"

Final output = "olleh"

--------------------------------------------------------
TIME COMPLEXITY:
O(n) - We traverse the string once.

SPACE COMPLEXITY:
O(n) - We create a new string to store the result.

--------------------------------------------------------
IMPORTANT INTERVIEW POINTS:

1. String length is a property, not a method.
   Correct: str.length
   Incorrect: str.length()

2. String indexing starts from zero.

3. Last valid index = str.length - 1.

4. Use lowercase string instead of String in TypeScript.

5. Strings are immutable in JavaScript.

--------------------------------------------------------
EDGE CASES:

reverseString("")       // ""
reverseString("A")      // "A"
reverseString("AB")     // "BA"
reverseString("12345")  // "54321"

--------------------------------------------------------
COUNTER QUESTIONS:

Q1. Why do we use str.length - 1?
Answer: Because string indexing starts from zero.

Q2. What happens if the input is an empty string?
Answer: The loop does not execute and returns an empty string.

Q3. Can we reverse a string using reverse()?
Answer: Yes. We can use split(), reverse(), and join(),
but this question specifically prohibits reverse().

Q4. What is the time complexity?
Answer: O(n) under the usual interview assumption
of efficient string concatenation.

Q5. Are strings mutable in JavaScript?
Answer: No. Strings are immutable.

========================================================
*/

// ============================================================
// PROGRAM 02: REVERSE STRING USING TWO POINTERS
// ============================================================

/*
INTERVIEW QUESTION:
Reverse a string without using reverse() or creating
a separate result string.

APPROACH:
1. Convert the string into a character array.
2. Initialize start and end pointers.
3. Swap characters at both positions.
4. Move start forward and end backward.
5. Continue until both pointers meet.

INPUT:  "hello"
OUTPUT: "olleh"

IMPORTANT:
JavaScript strings are immutable. Therefore, we convert
the string into an array before swapping characters.

*/

function reverseInPlace(str: string): string {

    let chars = str.split("");

    let start = 0;
    let end = chars.length - 1;

    while (start < end) {

        let temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;

        start++;
        end--;
    }

    return chars.join("");
}

// TEST CASES
console.log("PROGRAM 02:");
console.log(reverseInPlace("hello")); // olleh
console.log(reverseInPlace("12345")); // 54321
console.log(reverseInPlace("A"));     // A
console.log(reverseInPlace(""));      // ""


/*
DRY RUN: "hello"

Initial: h e l l o
         ^       ^
        start    end

Swap h and o: o e l l h
Swap e and l: o l l e h

Final: "olleh"

TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n) for the character array.

COUNTER QUESTIONS:
1. Why can't we modify a string directly?
2. What is the two-pointer technique?
3. Why do we use start < end?
4. What happens with an odd-length string?
5. Can you swap without using a temporary variable?

*/


// ============================================================
// PROGRAM 03: REVERSE EACH WORD IN A SENTENCE
// ============================================================

/*
INTERVIEW QUESTION:
Reverse every individual word in a sentence without
changing the order of the words.

INPUT:
"Hello World TypeScript"

OUTPUT:
"olleH dlroW tpircSypeT"

APPROACH:
1. Split the sentence into individual words.
2. Iterate through each word using map().
3. Reverse each word using a loop.
4. Join the reversed words into a sentence.

*/

function reverseEachWord(sentence: string): string {

    let words = sentence.split(" ");

    let result = words.map((word) => {

        let reversedWord = "";

        for (let i = word.length - 1; i >= 0; i--) {
            reversedWord += word.charAt(i);
        }

        return reversedWord;
    });

    return result.join(" ");
}

// TEST CASES
console.log("PROGRAM 03:");
console.log(reverseEachWord("Hello World TypeScript"));
// olleH dlroW tpircSypeT

console.log(reverseEachWord("I Love Coding"));
// I evoL gnidoC


/*
DRY RUN:

Input words:
["Hello", "World", "TypeScript"]

After reversing:
["olleH", "dlroW", "tpircSypeT"]

Final output:
"olleH dlroW tpircSypeT"

TIME COMPLEXITY: O(n) under the usual linear
string-processing assumption.
SPACE COMPLEXITY: O(n)

COUNTER QUESTIONS:
1. What is the difference between map() and forEach()?
2. How would you reverse the order of words?
3. How would you handle multiple spaces?
4. Can you solve this without map()?
5. What is the difference between split(" ") and split("")?

*/


// ============================================================
// PROGRAM 04: REVERSE STRING USING RECURSION
// ============================================================

/*
INTERVIEW QUESTION:
Reverse a string using recursion without using loops.

INPUT:  "hello"
OUTPUT: "olleh"

APPROACH:
1. Check the base condition.
2. If string length is zero or one, return the string.
3. Remove the last character.
4. Recursively reverse the remaining string.
5. Append the removed character at the end.

*/

function reverseUsingRecursion(str: string): string {

    // BASE CONDITION
    if (str.length <= 1) {
        return str;
    }

    return reverseUsingRecursion(
        str.substring(0, str.length - 1)
    ) + str.charAt(str.length - 1);
}

// TEST CASES
console.log("PROGRAM 04:");
console.log(reverseUsingRecursion("hello")); // olleh
console.log(reverseUsingRecursion("ABC"));   // CBA
console.log(reverseUsingRecursion("A"));     // A


/*
DRY RUN:

reverse("hello")
reverse("hell") + "o"
reverse("hel") + "l" + "o"
reverse("he") + "l" + "l" + "o"
reverse("h") + "e" + "l" + "l" + "o"

Final output: "olleh"

TIME COMPLEXITY: O(n²) for this implementation,
because repeated substring and string concatenation
can copy characters at each recursive level.

SPACE COMPLEXITY: O(n) recursion call stack,
excluding intermediate string allocations.

IMPORTANT:
Every recursive function needs:
1. Base condition
2. Recursive call
3. Progress towards the base condition

COUNTER QUESTIONS:
1. What is recursion?
2. What happens without a base condition?
3. What is a call stack?
4. What is stack overflow?
5. Can you solve this using iteration?
6. Why is this implementation O(n²)?

*/


// ============================================================
// PROGRAM 05: REVERSE ONLY LETTERS
// KEEP SPECIAL CHARACTERS IN THEIR POSITIONS
// ============================================================

/*
INTERVIEW QUESTION:
Reverse only alphabetic characters.
Special characters and numbers must remain in their
original positions.

INPUT:  "a,b$c"
OUTPUT: "c,b$a"

APPROACH:
1. Convert the string into an array.
2. Initialize start and end pointers.
3. Move start until an alphabetic character is found.
4. Move end backwards until an alphabetic character
   is found.
5. Swap the two alphabetic characters.
6. Continue until the pointers meet.

*/

function reverseOnlyLetters(str: string): string {

    let chars = str.split("");

    let start = 0;
    let end = chars.length - 1;

    while (start < end) {

        // Skip special characters from the left
        if (!/[a-zA-Z]/.test(chars[start])) {
            start++;
            continue;
        }

        // Skip special characters from the right
        if (!/[a-zA-Z]/.test(chars[end])) {
            end--;
            continue;
        }

        // Swap alphabetic characters
        let temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;

        start++;
        end--;
    }

    return chars.join("");
}

// TEST CASES
console.log("PROGRAM 05:");
console.log(reverseOnlyLetters("a,b$c")); // c,b$a
console.log(reverseOnlyLetters("ab-cd")); // dc-ba
console.log(reverseOnlyLetters("a-bC-dEf-ghIj"));
// j-Ih-gfE-dCba


/*
DRY RUN: "a,b$c"

Initial: a , b $ c
         ^         ^

Swap a and c:
         c , b $ a

Skip comma and dollar because they are not letters.

Final: "c,b$a"

TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n) for the character array.

IMPORTANT:
The regular expression [a-zA-Z] checks English
uppercase and lowercase letters only.

COUNTER QUESTIONS:
1. What is the two-pointer approach?
2. Why do we use continue?
3. What does /[a-zA-Z]/ mean?
4. How would you handle Unicode letters?
5. Can you solve this without regular expressions?

*/


// ============================================================
// PROGRAM 06: CHECK WHETHER A STRING IS A PALINDROME
// ============================================================

/*
INTERVIEW QUESTION:
Check whether a string reads the same forward and backward.

INPUT:  "madam"
OUTPUT: true

INPUT:  "hello"
OUTPUT: false

APPROACH:
1. Initialize start and end pointers.
2. Compare characters at both positions.
3. If characters are different, return false.
4. Move both pointers towards the center.
5. If all characters match, return true.

*/

function isPalindrome(str: string): boolean {

    let start = 0;
    let end = str.length - 1;

    while (start < end) {

        if (str.charAt(start) !== str.charAt(end)) {
            return false;
        }

        start++;
        end--;
    }

    return true;
}

// TEST CASES
console.log("PROGRAM 06:");
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("level")); // true
console.log(isPalindrome("A"));     // true
console.log(isPalindrome(""));      // true


/*
DRY RUN: "madam"

m == m  -> Match
a == a  -> Match
m       -> Center reached

Final output: true

TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(1) auxiliary space.

IMPORTANT:
This implementation is case-sensitive.
It also considers spaces and special characters.

Example:
isPalindrome("Madam") returns false.

An empty string is considered a palindrome here.

COUNTER QUESTIONS:
1. What is a palindrome?
2. Why is the two-pointer approach efficient?
3. How would you make it case-insensitive?
4. How would you ignore spaces and special characters?
5. Can a number be a palindrome?
6. What is the difference between reversing a string
   and checking a palindrome?

*/


// ============================================================
// PROGRAM 07: REVERSE STRING CONTAINING EMOJIS
// ============================================================

/*
INTERVIEW QUESTION:
Reverse a string containing emojis without breaking
the emoji characters.

INPUT:  "Hi😀"
OUTPUT: "😀iH"

IMPORTANT:
JavaScript strings use UTF-16 encoding.

Some emojis occupy two UTF-16 code units.
Therefore, split("") can break them apart.

APPROACH:
1. Use Array.from() to get Unicode code points.
2. Reverse the resulting array.
3. Join the array into a string.

*/

function reverseUnicodeString(str: string): string {

    return Array.from(str).reverse().join("");
}

// TEST CASES
console.log("PROGRAM 07:");
console.log(reverseUnicodeString("Hi😀")); 
// 😀iH

console.log(reverseUnicodeString("Hello😊"));
// 😊olleH


/*
WHY NOT USE split("")?

"Hi😀".split("")

This breaks some emojis into UTF-16 surrogate code units.

Array.from() iterates over Unicode code points.

TIME COMPLEXITY: O(n)
SPACE COMPLEXITY: O(n)

IMPORTANT INTERVIEW CONCEPTS:

1. Unicode:
   Standard for representing characters from different
   languages and symbol sets.

2. UTF-16:
   JavaScript string encoding.

3. Code point:
   A Unicode character value.

4. Grapheme cluster:
   A complete user-perceived character, which may consist
   of multiple code points.

IMPORTANT:
Array.from() handles Unicode code points but does not
always preserve complete visible characters.

For example:
Family emojis can contain multiple joined code points.

------------------------------------------------------------
ADVANCED SOLUTION: USING Intl.Segmenter
------------------------------------------------------------

This handles complete visible characters (graphemes).

*/

function reverseGraphemes(str: string): string {

    const segmenter = new Intl.Segmenter("en", {
        granularity: "grapheme"
    });

    const characters = Array.from(
        segmenter.segment(str),
        segment => segment.segment
    );

    return characters.reverse().join("");
}

// TEST CASES
console.log("ADVANCED UNICODE SOLUTION:");

console.log(reverseGraphemes("Hi😀"));
// 😀iH

console.log(reverseGraphemes("A👨‍👩‍👧‍👦B"));
// B👨‍👩‍👧‍👦A


/*
COUNTER QUESTIONS:

1. What is Unicode?
2. What is UTF-16?
3. Why does JavaScript use UTF-16?
4. What is the difference between split("") and Array.from()?
5. What is a surrogate pair?
6. What is the difference between a Unicode code point
   and a grapheme cluster?
7. What does Intl.Segmenter do?

============================================================
END OF PROGRAMS 02 TO 07
============================================================
*/


// ============================================================
// FINAL REVISION: IMPORTANT CONCEPTS
// ============================================================

/*
PROGRAM                         CONCEPT

02. Reverse using two pointers  Array swapping
03. Reverse each word           map(), split(), join()
04. Reverse using recursion     Recursion and call stack
05. Reverse only letters        Two pointers and regex
06. Palindrome                  Two pointers and comparison
07. Reverse emojis              Unicode and UTF-16

IMPORTANT PATTERNS TO REMEMBER:

1. Two Pointers:
   Reverse string, palindrome, reverse only letters.

2. Recursion:
   Reverse string, factorial, Fibonacci.

3. Array Methods:
   map(), filter(), reduce(), split(), join().

4. Unicode:
   Array.from(), Intl.Segmenter.

============================================================
*/
