const coin = () => {
    const arr = ['heads', 'tails']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

module.exports = coin;
