function convertFahrToCelsius(F) {
    if( !isNaN(F)){
        let C = (F - 32) * (5/9);
        return C.toFixed(4);
    } else if (Array.isArray(F)) {
        return "[" + F + "] is not a valid number but a/an array.";
    } else if (typeof F === 'object'){
      return "{" + Object.entries(F) + "} is not a valid number but a/an object.";
    } else if (typeof F === 'string'){
      return F + " is not a valid number but a/an string.";
    } else {
      return F + " is not a valid number.";
    }

};

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]); 
convertFahrToCelsius({temp:1});


function checkYuGiOh(n) {
    if (typeof n === 'object'){
        return "invalid parameter: " + Object.entries(n)  + ".";
    } else if (!isNaN(n)) {
        let list = []
        for (i=1; i <= n; i++){
            let word = "";
            if (i % 2 == 0){
                word += "Yu";
                if (i % 3 ==0 ){
                    word += "-Gi";
                    if (i % 5 == 0){
                        word += "-Oh"
                    }
                }else if (i % 5 == 0){
                    word += "-Oh"
                }
            } else if (i % 3 == 0 ){
                word += "Gi";
                if (i % 5 == 0){
                    word += "-Oh";
                }
            } else if (i % 5 == 0){
                word += "Oh";
            } else {
                word += i;
            }

            list.push(word);
        };
        return list;
    } else {
        return "invalid parameter " + n +"." ;
    }

    
};

checkYuGiOh(10);
checkYuGiOh("5");
checkYuGiOh("fizzbuzz is meh"); 