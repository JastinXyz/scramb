const minMax = (min, max) => {
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

module.exports = minMax;