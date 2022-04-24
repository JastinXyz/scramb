const ans = ["Maybe someday.", "Nothing.", "Neither.", "I don't think so.", "No.", "Yes.", "Try asking again.", "Nooo!"]
const magicConchShell = () => {
    let result = ans[Math.floor(Math.random() * ans.length)]

    const final = {
        result: result
    }

    return final;
}

module.exports = magicConchShell;
