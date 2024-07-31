/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

 //You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
var mergeAlternately = function(word1, word2) {
    let words = ""
    let wordLength = word1.length > word2.length ? word1.length : word2.length
    for(let i = 0; i < wordLength ; i++){
        if (word1[i]){
            words += word1[i]
        }
        if(word2[i]){
            words += word2[i]
        }
    }
    return words

};
