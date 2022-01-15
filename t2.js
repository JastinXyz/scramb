function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  const res = {
    result: re.test(email),
  };
  return res;
}

console.log(validateEmail("am"));
