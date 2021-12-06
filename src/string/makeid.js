const string = "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890"
const makeId = (number) => {
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

module.exports = makeId;