/**
 * Example 1:
 Input: s = "RLRRLLRLRL"
 Output: 4
 Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.

 Example 2:
 Input: s = "RLLLLRRRLR"
 Output: 3
 Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
 * @param {string} s
 * @return {number}
 */
interface MapType {
    [K: string]: number
}

const balancedStringSplit = (s: string): number => {
    var count = 0;
    var map: MapType = {};
    for (var i = 0; i < s.length; i++) {
        if (typeof map[s[i]] === 'undefined') {
            map[s[i]] = 0;
        }
        map[s[i]]++;
        if (map['R'] === map['L']) // r wait l count until they are same
            count++;
    }

    return count;
};
console.log(balancedStringSplit('RLRRLLRLRL'))
