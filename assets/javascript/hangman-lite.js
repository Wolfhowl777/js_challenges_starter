
(function (){

    let word = 'Space'
    let letter = 'a'

    var str = "space";

    function count(string,char) {
    var re = new RegExp(char, "gi");
    return string.match(re).length;
    }
    document.write("hello from hangman-lite.js");


var str = "space";
console.log(count(str, 'a'));
})();
