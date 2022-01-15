const loop = async(msg, n, p, ress) => {
    var res = {
        result: msg
    }

    if(ress === "plain") {
        res = msg
    } else if(ress === "json") {
        var res = {
            result: msg
        }
    } else {
        throw new Error('[ SCRAMB ERR ] Unknown')
    }

    if(!n && !msg) {

    } else if(isNaN(n)) {

    } else if(!p) {
        for(let i=0;i<n;i++) {
             console.log(res)
        }
    } else if(p === "console") {
        for(let i=0;i<n;i++) {
             console.log(res)
        }
    }
}

module.exports = loop;