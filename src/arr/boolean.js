const trueOrFalse = () => {
    const arr = ['True', 'False']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

module.exports = trueOrFalse;