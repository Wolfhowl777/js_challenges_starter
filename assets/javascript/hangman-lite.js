
(function () {

    var str = "space";

    function count(string, char) {
        let re = new RegExp(char, "g");
        let match = string.match(re);
        // console.log(match)
        
        if(match  ===  null){
            return 0
        }

        return match.length
    }

    console.log(count(str, "a") )


})();
