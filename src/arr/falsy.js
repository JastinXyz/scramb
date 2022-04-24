const falsy = () => {
    const arr = [false, 0, -0, 0n, "", null, undefined, NaN]
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

module.exports = falsy;
