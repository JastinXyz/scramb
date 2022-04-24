/*
   SCRAMB CDN
   Version: 3.0.4
   Apr 24, 2022
*/

function makeId(number) {
  const string =
    "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890";
  if (isNaN(number) == true) {
    throw new Error("[ SCRAMB ERR ] Input a number of length id!");
  }
  let result = "";
  const charlength = string.length;
  for (let i = 0; i < number; i++) {
    result += string.charAt(Math.floor(Math.random() * charlength));
  }
  const final = {
    result: result,
  };
  return final;
}

function passGen(number) {
  const string =
    "ABCDEFGHIJKLMNOPQRSTUVFXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+-=";
  if (isNaN(number) == true) {
    throw new Error("[ SCRAMB ERR ] Input a number of length password!");
  }
  let result = "";
  const charlength = string.length;
  for (let i = 0; i < number; i++) {
    result += string.charAt(Math.floor(Math.random() * charlength));
  }
  const final = {
    result: result,
  };
  return final;
}

function randomString(str, number) {
  var string = str;
  if (!str) {
    throw new Error("[ SCRAMB ERR ] Fill the string!");
  } else if (!number) {
    throw new Error("[ SCRAMB ERR ] Fill the length of string result!");
  } else if (isNaN(number) == true) {
    throw new Error(
      "[ SCRAMB ERR ] Input a valid number of length string result!"
    );
  } else if (number > str.length) {
    throw new Error(
      "[ SCRAMB ERR ] Number length of string result must be lower or same than string length!"
    );
  } else {
    var a = string.toString();
    let result = "";
    const charlength = a.length;
    for (let i = 0; i < number; i++) {
      result += a.charAt(Math.floor(Math.random() * charlength));
    }
    const final = {
      result: result,
    };
    return final;
  }
}

function isNumber(number) {
  var result = {};
  if (!number) {
    throw new Error("[ SCRAMB ERR ] value required.");
  } else {
    if (isNaN(number)) {
      result = {
        result: false,
      };
    } else {
      result = {
        result: true,
      };
    }
    return result;
  }
}

function isString(string) {
  if (!string) {
    throw new Error("[ SCRAMB ERR ] value required.");
  } else {
    const c = Object.prototype.toString.call(string) === "[object String]";
    const result = {
      result: c,
    };
    return result;
  }
}

function option(first, second) {
  const arr = [first, second];
  if (!arr) {
    throw new Error(`[ SCRAMB ERR ] Fill the first and second option!`);
  } else if (!first) {
    throw new Error(`[ SCRAMB ERR ] Fill the first option!`);
  } else if (!second) {
    throw new Error(`[ SCRAMB ERR ] Fill the second option!`);
  } else {
    const random = arr[Math.floor(Math.random() * arr.length)];
    const result = {
      result: random,
    };
    return result;
  }
}

function randomArr(arr) {
  if (!arr) {
    throw new Error(`[ SCRAMB ERR ] Fill the array!`);
  } else if (Array.isArray(arr) == false) {
    throw new Error(`[ SCRAMB ERR ] Is not a valid array!`);
  } else {
    const random = arr[Math.floor(Math.random() * arr.length)];
    const result = {
      result: random,
    };
    return result;
  }
}

function boolean() {
  const arr = ["True", "False"];
  const random = arr[Math.floor(Math.random() * arr.length)];
  const result = {
    result: random,
  };
  return result;
}

function yesNo() {
  const arr = ["Yes", "No"];
  const random = arr[Math.floor(Math.random() * arr.length)];
  const result = {
    result: random,
  };
  return result;
}

function minMax(min, max) {
  if (!min) {
    throw new Error("[ SCRAMB ERR ] Min value required.");
  } else if (!max) {
    throw new Error("[ SCRAMB ERR ] Max value required.");
  } else if (isNaN(min) || isNaN(max) == true) {
    throw new Error("[ SCRAMB ERR ] min or max must be a number!");
  } else {
    const c = Math.floor(Math.random() * (max - min + 1) + min);
    const result = {
      result: c,
    };
    return result;
  }
}

function userAgents() {
  const arr = require("../archived/stored/user-agents.json");
  const random = arr[Math.floor(Math.random() * arr.length)];
  const result = {
    result: random,
  };
  return result;
}

function isEmail(email) {
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

function isURL(url) {
  if (!url) {
    throw new Error("[ SCRAMB ERR ] value required.");
  } else {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))|" + // OR ip (v4) address
      "localhost" + // OR localhost
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    const res = {
      result: pattern.test(url),
    };
    return res;
  }
}

function makeidNumber(number) {
  const string = "0123456789";
  if (isNaN(number) == true) {
    throw new Error("[ SCRAMB ERR ] Input a number of length id!");
  }
  const a = string.toString();
  let result = "";
  const charlength = a.length;
  for (let i = 0; i < number; i++) {
    result += a.charAt(Math.floor(Math.random() * charlength));
  }
  const final = {
    result: result,
  };
  return final;
}

function magicConchShell() {
  const ans = [
    "Maybe someday.",
    "Nothing.",
    "Neither.",
    "I don't think so.",
    "No.",
    "Yes.",
    "Try asking again.",
    "Nooo!",
  ];
  let result = ans[Math.floor(Math.random() * ans.length)];

  const final = {
    result: result,
  };

  return final;
}

function shuffle(array) {
  if (!array) throw new Error("[ SCRAMB ERR ] array required!");
  if (Array.isArray(array) == false)
    throw new Error(`[ SCRAMB ERR ] Is not a valid array!`);

  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  const result = {
    result: array,
  };

  return result;
}

function coin() {
  const arr = ["heads", "tails"];
  const random = arr[Math.floor(Math.random() * arr.length)];
  const result = {
    result: random,
  };
  return result;
}

function falsy() {
  const arr = [false, 0, -0, 0n, "", null, undefined, NaN];
  const random = arr[Math.floor(Math.random() * arr.length)];
  const result = {
    result: random,
  };
  return result;
}
