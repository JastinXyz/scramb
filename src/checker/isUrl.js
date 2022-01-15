const isURL = (url) => {
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
          result: pattern.test(url)
        };
        return res;
      }
}

module.exports = isURL;