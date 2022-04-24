const isYoutubeUrl = (url) => {
    if (!url) {
        throw new Error("[ SCRAMB ERR ] value required.");
      } else {
        const pattern = new RegExp(/(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/, "gi")
        const res = {
          result: pattern.test(url)
        };
        return res;
      }
}

module.exports = isYoutubeUrl
