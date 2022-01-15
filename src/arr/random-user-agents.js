const arr = require('../archived/stored/user-agents.json')
const userAgents = () => {
        const random = arr[Math.floor(Math.random() * arr.length)]
        const result = {
            result: random
        }
        return result;
}

module.exports = userAgents;