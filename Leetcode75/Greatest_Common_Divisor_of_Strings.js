/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

 //Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
 
var gcdOfStrings = function(str1, str2) {
    var gcd = (a,b)=> {
        while(b !== 0){
            let temp = b
            b = a % b
            a = temp
        }
        return a
    }

    if (str1 + str2 != str2 + str1){
        return ""
    }


    var gcdLength = gcd(str1.length,str2.length)

    return str1.slice(0, gcdLength)
};
