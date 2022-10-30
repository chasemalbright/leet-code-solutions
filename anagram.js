// https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {

    let map1 = new Map();
    let map2 = new Map();

    for (let i = 0; i < s.length; i++){
        if (!map1.has(s.charAt(i))){
            map1.set(s.charAt(i), 0);
        }
        map1.set(s.charAt(i), map1.get(s.charAt(i)) + 1);
    }

    for (let i = 0; i < t.length; i++){
        if (!map2.has(t.charAt(i))){
            map2.set(t.charAt(i), 0);
        }
        map2.set(t.charAt(i), map2.get(t.charAt(i)) + 1);
    }
    for (let i = 0; i < s.length; i++){
        if (!map2.has(s.charAt(i)) || map1.get(s.charAt(i)) != map2.get(s.charAt(i))){
            return false
        }
    }


    return true;

};