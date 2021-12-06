const yesNo = () => {
    const arr = ['Yes', 'No']
    const random = arr[Math.floor(Math.random() * arr.length)]
    const result = {
        result: random
    }
    return result;
}

module.exports = yesNo;