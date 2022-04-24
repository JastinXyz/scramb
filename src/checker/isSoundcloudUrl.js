const isSoundcloudUrl = (url) => {
    if (!url) {
        throw new Error("[ SCRAMB ERR ] value required.");
      } else {
        var soundcloud = new RegExp(/((https:\/\/)|(http:\/\/)|(www.)|(m\.)|(\s))+(soundcloud.com\/)+[a-zA-Z0-9\-\.]+(\/)+[a-zA-Z0-9\-\.]+/, "gi")
        const res = {
          result: soundcloud.test(url)
        };
        return res;
      }
}

module.exports = isSoundcloudUrl;
