// 914. X of a Kind in a Deck of Cards
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// You are given an integer array deck where deck[i] represents the number written on the ith card.

// Partition the cards into one or more groups such that:

// Each group has exactly x cards where x > 1, and
// All the cards in one group have the same integer written on them.
// Return true if such partition is possible, or false otherwise.

 

// Example 1:

// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:

// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
 

// Constraints:

// 1 <= deck.length <= 104
// 0 <= deck[i] < 104

//solution

var hasGroupsSizeX = function(deck) {
    // Step 1: Count frequency of each number
    const freq = new Map();
    for (let num of deck) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    // Step 2: GCD function
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    // Step 3: Find GCD of all frequencies
    let g = 0;
    for (let count of freq.values()) {
        g = gcd(g, count);
    }

    // Step 4: Check if group size > 1
    return g >= 2;
};
