function isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}

const randomString = (str, number) => {
    var string = str;
   if(!str) {
       throw new Error('[ SCRAMB ERR ] Fill the string!')
   } else if(!number) {
    throw new Error('[ SCRAMB ERR ] Fill the length of string result!')
} else if(isNaN(number) == true) {
    throw new Error('[ SCRAMB ERR ] Input a valid number of length string result!')
} else if(number > str.length) {
    throw new Error('[ SCRAMB ERR ] Number length of string result must be lower or same than string length!')
} else {
    var a = string.toString()
    let result = '';
    const charlength = a.length;
    for(let i = 0; i < number; i++) {
        result += a.charAt(Math.floor(Math.random() * charlength));
    }
    const final = {
        result: result
    }
    return final;
    }
}

module.exports = randomString;

