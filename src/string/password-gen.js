const string = "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-="
const passGen = (number) => {
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

module.exports = passGen;