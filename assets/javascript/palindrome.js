let str = "eyejklje"



function palindrome(inStr) {
    console.log(inStr)
    for (let i = 0; i< inStr.length; i=i+1) {
        console.log(inStr[i])
        console.log(inStr[inStr.length -1 - i])
        if (inStr [i] !== inStr[inStr.length -1 - i]) {
            return false
        }
    }
    return true;
}
console.log (palindrome(str));
