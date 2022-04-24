/* 
   SCRAMB CDN
*/

function makeId(number) {
    const string = "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890"
    if(isNaN(number) == true) {
        throw new Error('[ SCRAMB ERR ] Input a number of length id!')
    }
    let result = '';
    const charlength = string.length;
    for(let i = 0; i < number; i++) {
        result += string.charAt(Math.floor(Math.random() * charlength));
    }
    const final = {
        result: result
    }
    return final;
}

function passGen(number) {
    const string = "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-="
    if(isNaN(number) == true) {
        throw new Error('[ SCRAMB ERR ] Input a number of length password!')
    }
    let result = '';
    const charlength = string.length;
    for(let i = 0; i < number; i++) {
        result += string.charAt(Math.floor(Math.random() * charlength));
    }
    const final = {
        result: result
    }
    return final;
}

function randomString(str, number) {
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

function isNumber(number) {
    var result = {}
    if(!number) {
        throw new Error('[ SCRAMB ERR ] value required.')
    } else {
     if(isNaN(number)) {
         result = {
            result: false
        } 
     } else {
        result = {
            result: true
        } 
     }
     return result;
   }
}

function isString(string) {
    if(!string) {
        throw new Error('[ SCRAMB ERR ] value required.')
    } else {
     const c = Object.prototype.toString.call(string) === "[object String]"
     const result = {
         result: c
     } 
     return result
    } 
   }

function option(first, second) {
    const arr = [first, second]
    if(!arr) {
        throw new Error(`[ SCRAMB ERR ] Fill the first and second option!`)
    } else if(!first) {
        throw new Error(`[ SCRAMB ERR ] Fill the first option!`)
    } else if(!second) {
        throw new Error(`[ SCRAMB ERR ] Fill the second option!`)
    } else {
        const random = arr[Math.floor(Math.random() * arr.length)]
        const result = {
            result: random
        }
        return result;
    }
}

function randomArr(arr) {
    if(!arr) {
        throw new Error(`[ SCRAMB ERR ] Fill the array!`)
    } else if(Array.isArray(arr) == false) {
        throw new Error(`[ SCRAMB ERR ] Is not a valid array!`)
    } else {
        const random = arr[Math.floor(Math.random() * arr.length)]
        const result = {
            result: random
        }
        return result;
    }
}

function trueOrFalse() {
    const arr = ['True', 'False']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

function yesNo() {
    const arr = ['Yes', 'No']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

function minMax(min, max) {
    if(!min) {
        throw new Error('[ SCRAMB ERR ] Min value required.')
    } else if(!max) {
        throw new Error('[ SCRAMB ERR ] Max value required.')
    } else if(isNaN(min) || isNaN(max) == true) {
        throw new Error('[ SCRAMB ERR ] min or max must be a number!')
    } else {
     const c = Math.floor(Math.random() * (max - min + 1) + min)
        const result = {
            result: c
        }
        return result;
    }
}