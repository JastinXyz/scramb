const randomArr = (arr) => {
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

module.exports = randomArr;