const fs = require('node:fs')
const readline = require('node:readline')

let count = 0

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-03/input.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        // console.log(`Line from file: ${line}`)

        // https://flaviocopes.com/how-to-cut-array-half-javascript/

        const half = Math.ceil(line.length / 2)

        const firstHalf = line.slice(0, half)
        const secondHalf = line.slice(half)

        //https://stackoverflow.com/questions/55350674/how-to-count-common-characters-in-two-strings-in-javascript

        function match(firstHalf, secondHalf) {
            for (let i in secondHalf) {
                if (firstHalf.includes(secondHalf[i])) {
                    return secondHalf[i]
                }
            }
        }

        let commonLetter = match(firstHalf, secondHalf)
        if (commonLetter == commonLetter.toUpperCase()) {
            count += upperCaseMap[commonLetter]
        } else {
            count += lowerCaseMap[commonLetter]
        }

        console.log(count)
    }
}

processLineByLine()
