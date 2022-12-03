const fs = require('node:fs')
const readline = require('node:readline')

const { upperCaseMap, lowerCaseMap } = require('./maps.js')

let count = 0

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-03/input.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let arrayOfThrees = []
    let miniArray = []
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        // console.log(`Line from file: ${line}`)

        if (miniArray.length < 2) {
            miniArray.push(line)
        } else {
            miniArray.push(line)
            arrayOfThrees.push(miniArray)
            miniArray = []
        }

        //https://stackoverflow.com/questions/55350674/how-to-count-common-characters-in-two-strings-in-javascript

        console.log(count)
    }

    for (let i = 0; i < arrayOfThrees.length; i++) {
        function match(firstLine, secondLine, thirdLine) {
            for (let i in secondLine) {
                if (
                    firstLine.includes(secondLine[i]) &&
                    thirdLine.includes(secondLine[i])
                ) {
                    return secondLine[i]
                }
            }
        }

        let commonLetter = match(
            arrayOfThrees[i][0],
            arrayOfThrees[i][1],
            arrayOfThrees[i][2]
        )

        if (
            typeof commonLetter === 'string' &&
            commonLetter == commonLetter.toUpperCase()
        ) {
            count += upperCaseMap[commonLetter]
        } else if (typeof commonLetter === 'string') {
            count += lowerCaseMap[commonLetter]
        }
    }
    console.log(count)
}

processLineByLine()
