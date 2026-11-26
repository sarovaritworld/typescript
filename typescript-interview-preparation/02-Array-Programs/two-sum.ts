/**
 * ============================================================================
 * PROGRAM 14 – TWO SUM
 * ============================================================================
 *
 * Difficulty : Easy
 * Topics     : Arrays, Nested Loops, HashMap, JavaScript Map
 *
 * PROBLEM STATEMENT
 * -----------------
 * Given an array of integers `nums` and an integer `target`, return the
 * indices of the two numbers whose sum equals `target`.
 *
 * Requirements:
 * 1. Return the INDICES, not the numbers themselves.
 * 2. Do not use the same array element twice.
 * 3. Exactly one valid solution is guaranteed by the problem.
 *
 * Example:
 *   nums   = [2, 11, 15, 7]
 *   target = 9
 *   Output = [0, 3]
 *
 *   Explanation: nums[0] + nums[3] = 2 + 7 = 9
 *
 *
 * ============================================================================
 * APPROACH 1 – BRUTE FORCE (NESTED LOOPS)
 * ============================================================================
 *
 * LOGIC
 * -----
 * 1. Use the outer loop to select one number at index `i`.
 * 2. Start the inner loop at `i + 1`, so we only check elements after `i`.
 * 3. Add nums[i] and nums[j].
 * 4. If their sum equals the target, return [i, j].
 * 5. If no pair is found, return an empty array.
 *
 * WHY DOES THE INNER LOOP START AT i + 1?
 * ---------------------------------------
 * - It prevents comparing an element with itself.
 * - It avoids checking the same pair twice.
 * - For example, after checking (index 0, index 1), there is no need to
 *   check (index 1, index 0) again.
 *
 * DRY RUN
 * -------
 * nums   = [2, 11, 15, 7]
 * target = 9
 *
 * i = 0, nums[i] = 2
 *   j = 1 -> 2 + 11 = 13 -> no match
 *   j = 2 -> 2 + 15 = 17 -> no match
 *   j = 3 -> 2 + 7  = 9  -> match, return [0, 3]
 *
 * BRUTE-FORCE CODE
 * ----------------
 */

function twoSumBruteForce(nums: number[], target: number): number[] {
    // Select the first number in the pair.
    for (let i = 0; i < nums.length; i++) {

        // Check only the elements that come after index i.
        for (let j = i + 1; j < nums.length; j++) {

            // Check whether the two selected numbers add up to target.
            if (nums[i] + nums[j] === target) {
                // Return their indices immediately when a pair is found.
                return [i, j];
            }
        }
    }

    // The problem guarantees a solution, but this keeps the function safe
    // if it is reused with an input that has no matching pair.
    return [];
}

/**
 * BRUTE-FORCE COMPLEXITY
 * ----------------------
 * Time Complexity  : O(n²)
 *   In the worst case, the nested loops examine a quadratic number of pairs.
 *
 * Auxiliary Space  : O(1)
 *   Only a fixed number of variables are used. The returned array contains
 *   two indices and is not counted as auxiliary working space.
 *
 *
 * ============================================================================
 * APPROACH 2 – OPTIMIZED (HASHMAP USING JAVASCRIPT MAP)
 * ============================================================================
 *
 * KEY IDEA
 * --------
 * Instead of checking every possible pair with a second loop, remember the
 * numbers we have already visited and their indices in a Map.
 *
 * For each current number:
 *
 *   complement = target - currentNumber
 *
 * The complement is the number we need to complete the target.
 *
 * Example:
 *   currentNumber = 2
 *   target        = 9
 *   complement   = 9 - 2 = 7
 *
 * If 7 has already been stored in the Map, we have found the answer.
 *
 * HOW THE MAP IS USED
 * -------------------
 * Map key   : number from the array
 * Map value : index where that number was found
 *
 * IMPORTANT ORDER OF OPERATIONS
 * -----------------------------
 * 1. Calculate the complement.
 * 2. Check whether the complement already exists in the Map.
 * 3. If it exists, return [storedIndex, currentIndex].
 * 4. Otherwise, store the current number and its index.
 *
 * We check BEFORE inserting the current number. This ensures that we do not
 * use the same element twice. It also correctly handles duplicate values,
 * such as nums = [3, 3], target = 6.
 *
 * OPTIMIZED DRY RUN
 * ----------------
 * nums   = [2, 11, 15, 7]
 * target = 9
 *
 * Start with an empty Map: {}
 *
 * Index 0, current number = 2
 *   complement = 9 - 2 = 7
 *   Is 7 in Map? No.
 *   Store 2 -> 0
 *   Map: { 2 => 0 }
 *
 * Index 1, current number = 11
 *   complement = 9 - 11 = -2
 *   Is -2 in Map? No.
 *   Store 11 -> 1
 *   Map: { 2 => 0, 11 => 1 }
 *
 * Index 2, current number = 15
 *   complement = 9 - 15 = -6
 *   Is -6 in Map? No.
 *   Store 15 -> 2
 *   Map: { 2 => 0, 11 => 1, 15 => 2 }
 *
 * Index 3, current number = 7
 *   complement = 9 - 7 = 2
 *   Is 2 in Map? Yes, at index 0.
 *   Return [0, 3].
 *
 * OPTIMIZED CODE
 * --------------
 */

function twoSum(nums: number[], target: number): number[] {
    // Store each previously visited number and its index.
    const seen = new Map<number, number>();

    // Visit every array element once.
    for (let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i];

        // Find the number needed to make the target sum.
        const complement = target - currentNumber;

        // Map.has() checks whether the complement was seen earlier.
        if (seen.has(complement)) {
            // Map.get() returns the index associated with the complement.
            // The non-null assertion (!) is safe here because has() was true.
            const complementIndex = seen.get(complement)!;

            // Return the earlier index first, followed by the current index.
            return [complementIndex, i];
        }

        // Store the current number only after checking for its complement.
        // This prevents using the current array element twice.
        seen.set(currentNumber, i);
    }

    // Fallback for inputs where no valid pair exists.
    return [];
}

/**
 * OPTIMIZED COMPLEXITY
 * --------------------
 * Time Complexity  : O(n) average time
 *   We traverse the array once. Map lookup and insertion are O(1) on average.
 *
 * Auxiliary Space  : O(n)
 *   In the worst case, the Map stores up to n numbers and their indices.
 *
 *
 * ============================================================================
 * EDGE CASES TO UNDERSTAND
 * ============================================================================
 *
 * 1. Pair at the beginning:
 *    twoSum([2, 7, 11, 15], 9) -> [0, 1]
 *
 * 2. Pair not next to each other:
 *    twoSum([2, 11, 15, 7], 9) -> [0, 3]
 *
 * 3. Duplicate values:
 *    twoSum([3, 3], 6) -> [0, 1]
 *    The first 3 is stored; the second 3 finds its complement.
 *
 * 4. Negative numbers:
 *    twoSum([-1, -2, -3, -4], -6) -> [1, 3]
 *
 * 5. Zero values:
 *    twoSum([0, 4, 3, 0], 0) -> [0, 3]
 *
 * 6. No solution:
 *    twoSum([1, 2, 3], 10) -> []
 *    The original interview problem guarantees a solution, but the fallback
 *    return handles this case if the function is used elsewhere.
 *
 *
 * ============================================================================
 * TEST CASES
 * ============================================================================
 */

const testCases: Array<{
    nums: number[];
    target: number;
    expected: number[];
}> = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [2, 11, 15, 7], target: 9, expected: [0, 3] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
    { nums: [-1, -2, -3, -4], target: -6, expected: [1, 3] },
    { nums: [0, 4, 3, 0], target: 0, expected: [0, 3] }
];

for (const test of testCases) {
    const result = twoSum(test.nums, test.target);

    console.log({
        input: test.nums,
        target: test.target,
        result,
        expected: test.expected
    });
}

/**
 * ============================================================================
 * BRUTE FORCE VS OPTIMIZED
 * ============================================================================
 *
 *                    BRUTE FORCE       OPTIMIZED (MAP)
 * Time Complexity    O(n²)             O(n) average
 * Space Complexity   O(1)              O(n)
 * Main technique     Nested loops      HashMap / Map
 *
 *
 * ============================================================================
 * INTERVIEW EXPLANATION
 * ============================================================================
 *
 * BRUTE-FORCE EXPLANATION:
 * "I use two nested loops. The outer loop selects an element, and the inner
 * loop checks every element after it. If their sum equals the target, I return
 * their indices. This takes O(n²) time and O(1) auxiliary space."
 *
 * OPTIMIZED EXPLANATION:
 * "I use a Map to store numbers I have already visited along with their
 * indices. For each number, I calculate its complement by subtracting it from
 * the target. If the complement exists in the Map, I return the stored index
 * and the current index. Otherwise, I store the current number and continue.
 * This takes O(n) average time and O(n) space."
 *
 *
 * ============================================================================
 * IMPORTANT TYPESCRIPT / JAVASCRIPT NOTES
 * ============================================================================
 *
 * 1. Map<number, number>
 *    Creates a Map where both keys and values are numbers.
 *
 * 2. seen.has(value)
 *    Checks whether a key exists in the Map.
 *
 * 3. seen.get(value)
 *    Retrieves the value (here, the array index) associated with a key.
 *
 * 4. seen.set(key, value)
 *    Adds a key-value pair to the Map.
 *
 * 5. ===
 *    Strict equality comparison. Prefer it over ==.
 *
 * 6. Return [i, j]
 *    Returns the two indices as a number array.
 *
 *
 * ============================================================================
 * FINAL TAKEAWAY
 * ============================================================================
 *
 * The brute-force approach checks every possible pair using nested loops.
 * The optimized approach avoids the second loop by remembering previously
 * visited numbers in a Map and searching for the required complement.
 *
 * Remember:
 *   target - currentNumber = complement
 *
 * Interview recommendation:
 * Explain the brute-force approach first, then improve it using Map.
 * Be ready to explain why the Map lookup happens BEFORE inserting the current
 * number, especially for duplicate-value inputs such as [3, 3].
 *
 * ============================================================================
 */
