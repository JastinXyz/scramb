const rps = () => {
    const arr = ['Rock', 'Paper', 'Scissors']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

module.exports = rps;