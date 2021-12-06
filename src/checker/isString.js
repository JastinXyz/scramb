const isString = (string) => {
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

module.exports = isString;