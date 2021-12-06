const option = (first, second) => {
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

module.exports = option;