
(function () {

    var str = "spaceman";

    function count(string, char) {
        let re = new RegExp(char, "g");
        let match = string.match(re);
        // console.log(match)
        
        if(match  ===  null){
            return 0
        }

        return match.length
    }
    let letter = 'a'
    let letterCount = count(str, letter)
    console.log("Yeah, the letter " + letter +" exists "+letterCount+" times in my word") 


})();
