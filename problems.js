/* 
    14. Longest Common Prefix
    - https://leetcode.com/problems/longest-common-prefix/description/
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return "";

    let prefix = "";
    let reference = strs[0]; // use the first string as a reference

    for (let i = 0; i < reference.length; i++) {
        // Check this character against all other strings
        for (let j = 1; j < strs.length; j++) {
            // If a mismatch is found, return the current prefix
            if (i >= strs[j].length || strs[j][i] !== reference[i]) {
                return prefix;
            }
        }
        // If all strings match at this index, add the character to the prefix
        prefix += reference[i];
    }
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // output: "fl"