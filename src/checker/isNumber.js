var result = {}
const isNumber = (number) => {
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
   
   module.exports = isNumber;