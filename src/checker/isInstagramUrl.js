const isInstagramURL = (url) => {
    if (!url) {
        throw new Error("[ SCRAMB ERR ] value required.");
      } else {
        var ig = new RegExp(/https:\/\/www.instagram.com\/(p|reel|tv)/, "gi")
        const res = {
          result: ig.test(url)
        };
        return res;
      }
}

module.exports = isInstagramUrl;
