
/*
===========================================================
PROGRAM 08: CHECK WHETHER A STRING IS A PALINDROME
===========================================================

Problem:
Write a TypeScript function to check whether a given string
is a palindrome.

A palindrome is a string that reads the same forwards
and backwards.

Examples:
Input:  "madam"  -> true
Input:  "level"  -> true
Input:  "hello"  -> false
Input:  "racecar" -> true
Input:  "a"      -> true
Input:  ""       -> true

===========================================================
APPROACH 1: REVERSE STRING AND COMPARE
===========================================================

Logic:
1. Create an empty string called res.
2. Traverse the original string from the last character
   to the first character.
3. Append each character to res.
4. Compare the reversed string with the original string.
5. If both strings match, return true; otherwise false.

*/

function isPalindrome(str: string): boolean {

    let res: string = "";

    for (let i = str.length - 1; i >= 0; i--) {
        res += str.charAt(i);
    }

    return res === str;
}

// Test cases
console.log("Approach 1 - Reverse and Compare");

console.log(isPalindrome("madam"));   // true
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("a"));       // true
console.log(isPalindrome(""));        // true
console.log(isPalindrome("Madam"));   // false

/*
Dry Run:

Input: "madam"

Iteration 1: i = 4, character = m, res = "m"
Iteration 2: i = 3, character = a, res = "ma"
Iteration 3: i = 2, character = d, res = "mad"
Iteration 4: i = 1, character = a, res = "mada"
Iteration 5: i = 0, character = m, res = "madam"

Comparison:
res === str
"madam" === "madam"

Output: true

Time Complexity: O(n)
- We traverse all n characters once.

Space Complexity: O(n)
- We create another string to store the reversed result.

Note:
String concatenation performance can depend on the JavaScript
engine, but O(n) is the standard interview-level analysis
for this approach.
*/


/*
===========================================================
APPROACH 2: TWO POINTERS (OPTIMIZED APPROACH)
===========================================================

Logic:
1. Initialize left pointer at index 0.
2. Initialize right pointer at the last index.
3. Compare characters at both pointers.
4. If characters do not match, return false.
5. Move left forward and right backward.
6. Continue until left is no longer less than right.
7. If all characters match, return true.

Why is this optimized?
- No reversed string is created.
- Only two variables are used for traversal.

*/

function isPalindromeTwoPointers(str: string): boolean {

    let left: number = 0;
    let right: number = str.length - 1;

    while (left < right) {

        if (str.charAt(left) !== str.charAt(right)) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Test cases
console.log("Approach 2 - Two Pointers");

console.log(isPalindromeTwoPointers("madam"));   // true
console.log(isPalindromeTwoPointers("level"));   // true
console.log(isPalindromeTwoPointers("hello"));   // false
console.log(isPalindromeTwoPointers("racecar")); // true
console.log(isPalindromeTwoPointers("a"));       // true
console.log(isPalindromeTwoPointers(""));        // true
console.log(isPalindromeTwoPointers("abba"));    // true

/*
Dry Run:

Input: "madam"

Initial:
left = 0
right = 4

Iteration 1:
str[left]  = m
str[right] = m
Match found.
left = 1, right = 3

Iteration 2:
str[left]  = a
str[right] = a
Match found.
left = 2, right = 2

Loop condition left < right becomes false.

Output: true

Time Complexity: O(n)
- In the worst case, we compare approximately n/2 pairs.
- O(n/2) simplifies to O(n).

Auxiliary Space Complexity: O(1)
- Only two pointer variables are used.
- No additional string or array is created.

Interview Tip:
This is generally the preferred solution when the interviewer
asks for an optimized palindrome check.
*/


/*
===========================================================
APPROACH 3: CASE-INSENSITIVE PALINDROME
IGNORE SPACES AND SPECIAL CHARACTERS
===========================================================

Problem Variation:

Check whether a string is a palindrome after ignoring:
1. Uppercase and lowercase differences.
2. Spaces.
3. Special characters and punctuation.

Example:
Input: "A man, a plan, a canal: Panama"
Output: true

Logic:
1. Convert the input to lowercase.
2. Remove all characters except English letters and digits.
3. Apply the two-pointer approach to the cleaned string.

*/

function isNormalizedPalindrome(str: string): boolean {

    const cleaned: string = str
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");

    let left: number = 0;
    let right: number = cleaned.length - 1;

    while (left < right) {

        if (cleaned.charAt(left) !== cleaned.charAt(right)) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

// Test cases
console.log("Approach 3 - Normalized Palindrome");

console.log(
    isNormalizedPalindrome("A man, a plan, a canal: Panama")
); // true

console.log(isNormalizedPalindrome("Madam"));          // true
console.log(isNormalizedPalindrome("hello"));         // false
console.log(isNormalizedPalindrome("No 'x' in Nixon")); // true
console.log(isNormalizedPalindrome(""));               // true
console.log(isNormalizedPalindrome("12321"));          // true
console.log(isNormalizedPalindrome("12345"));          // false

/*
Explanation:

Input:
"A man, a plan, a canal: Panama"

After lowercase:
"a man, a plan, a canal: panama"

After removing spaces and special characters:
"amanaplanacanalpanama"

The cleaned string is a palindrome.

Time Complexity: O(n)
- Lowercase conversion and replace take O(n).
- Two-pointer comparison takes O(n).
- Overall O(n).

Space Complexity: O(n)
- A new cleaned string is created.
- Two pointers use O(1) additional space.

Note:
This regular expression supports English letters (a-z)
and digits (0-9). It is not fully Unicode-aware.
*/


/*
===========================================================
EDGE CASES
===========================================================

Input       Expected       Explanation

"madam"     true           Normal palindrome
"hello"     false          Not a palindrome
"a"         true           Single character
""          true           Empty string
"aa"        true           Both characters match
"abba"      true           Even-length palindrome
"abc"       false          Characters do not match
"Madam"     false          Exact comparison is case-sensitive
"madam "    false          Trailing space changes the string

For normalized palindrome:

"A man, a plan, a canal: Panama" -> true
"No 'x' in Nixon"               -> true
"Was it a car or a cat I saw?"  -> true
"hello"                         -> false

===========================================================
TIME AND SPACE COMPLEXITY SUMMARY
===========================================================

Approach 1: Reverse and Compare
Time Complexity: O(n)
Space Complexity: O(n)

Approach 2: Two Pointers
Time Complexity: O(n)
Auxiliary Space Complexity: O(1)

Approach 3: Normalize + Two Pointers
Time Complexity: O(n)
Auxiliary Space Complexity: O(n)

===========================================================
INTERVIEWER COUNTER QUESTIONS AND ANSWERS
===========================================================

Q1. What is a palindrome?
Answer:
A string that reads the same forwards and backwards.

Q2. Can you solve this problem without using reverse()?
Answer:
Yes. We can traverse the string backwards using a loop
or use two pointers from opposite ends.

Q3. What is the time complexity of your reverse approach?
Answer:
O(n), because we traverse all characters once.

Q4. What is the space complexity of your reverse approach?
Answer:
O(n), because we create another string to store the
reversed characters.

Q5. Can you optimize the solution?
Answer:
Yes. We can use two pointers and compare characters
from both ends without creating another string.

Q6. What is the auxiliary space complexity of two pointers?
Answer:
O(1), because we only use two index variables.

Q7. What happens if the input is an empty string?
Answer:
It returns true because an empty string is conventionally
considered a palindrome.

Q8. Is "Madam" a palindrome?
Answer:
With exact, case-sensitive comparison, false.
After converting to lowercase, true.

Q9. How can you ignore spaces and special characters?
Answer:
Convert the string to lowercase and remove unwanted
characters using a regular expression before comparing.

Q10. What is the difference between == and ===?
Answer:
== allows type coercion, whereas === checks both value
and type without type coercion.
For string comparison, prefer ===.

Q11. Why do we use left < right instead of left <= right?
Answer:
When both pointers meet at the middle character,
there is no need to compare that character with itself.

Q12. Can a number be a palindrome?
Answer:
Yes. For example, 121 and 1331 are numeric palindromes.
We can solve that using number reversal or digit-based
two-pointer logic after converting to a string.

===========================================================
IMPORTANT TYPESCRIPT CONCEPTS
===========================================================

1. string
   Used for string variables and function parameters.

2. boolean
   Used as the return type because the function returns
   either true or false.

3. length
   A property of a string, not a method.
   Correct: str.length
   Incorrect: str.length()

4. charAt(index)
   Returns the character at the specified index.

5. Strict equality (===)
   Compares values without type coercion.

6. while loop
   Useful for the two-pointer approach.

7. replace()
   Used to remove unwanted characters from a string.

8. Regular expression
   /[^a-z0-9]/g matches characters other than English
   lowercase letters and digits.

===========================================================
FINAL INTERVIEW TAKEAWAY
===========================================================

Understand all three approaches:

1. Reverse and Compare:
   Easiest to understand and implement.

2. Two Pointers:
   Preferred optimized solution.
   O(n) time and O(1) auxiliary space.

3. Normalize + Two Pointers:
   Useful when the interviewer asks to ignore case,
   spaces, and punctuation.

Most important:
Do not just memorize the code. Be able to explain the
loop, pointer movement, edge cases, and complexity.
===========================================================
*/
