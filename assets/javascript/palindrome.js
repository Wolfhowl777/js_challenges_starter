let str = "eye"

let Palindrome = (inStr) => {
    for (let i = 0; i< inStr.lenth; i + 1) {
        if (inStr [i] !== [inStr.Lenth -1 - i]) {
            return false
        }
    }
    return true;
}
console.log (Palindrome(str));
