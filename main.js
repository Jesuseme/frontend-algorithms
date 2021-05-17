function convertFahrToCelsius(F) {
    if( !isNaN(F)){
        let C = (F - 32) * (5/9);
        return C.toFixed(4);
    } else if (Array.isArray(F)) {
        return "[" + F + "] is not a valid number but a/an array.";
    } else if (typeof F === 'object'){
      return "{" + Object.entries(F) + "} is not a valid number but a/an object."
    } else if (typeof F === 'string'){
      return F + " is not a valid number but a/an string."
    } else {
      return F + " is not a valid number.";
    }

};

convertFahrToCelsius(0);
convertFahrToCelsius("0");
convertFahrToCelsius([1,2,3]); 
convertFahrToCelsius({temp:1});