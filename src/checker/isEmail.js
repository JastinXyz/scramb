const isEmail = (email) => {
  if (!email) {
    throw new Error("[ SCRAMB ERR ] value required.");
  } else {
    var re = /\S+@\S+\.\S+/;
    const res = {
      result: re.test(email),
    };
    return res;
  }
}

module.exports = isEmail;