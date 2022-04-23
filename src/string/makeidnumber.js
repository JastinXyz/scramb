const string = "0123456789"
const makeidNumber = (number) => {
    if(isNaN(number) == true) {
        throw new Error('[ SCRAMB ERR ] Input a number of length id!')
    }
    const a = string.toString()
    let result = ''
    const charlength = a.length;
    for(let i = 0; i < number; i++) {
        result += a.charAt(Math.floor(Math.random() * charlength))
    }
    const final = {
        result: result
    }
    return final;
}

module.exports = makeidNumber;

