const fs = require('node:fs')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-06/input.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.

        for (let i = 0; i < line.length; i++) {
            let letter = line.charAt(i)
            let letterBefore = line.charAt(i - 1)
            let letterBeforeBefore = line.charAt(i - 2)
            let letterAfter = line.charAt(i + 1)
            let letterAfterAfter = line.charAt(i + 2)

            let expensiveArray = [
                letterBeforeBefore,
                letterBefore,
                letter,
                letterAfter,
                letterAfterAfter,
            ]

            // got the following function from https://stackoverflow.com/questions/49215358/checking-for-duplicate-strings-in-javascript-array
            let findDuplicates = (arr) =>
                arr.filter((item, index) => arr.indexOf(item) != index)
            let found = findDuplicates(expensiveArray)

            if (found.length === 0) {
                console.log(expensiveArray)
                console.log(i + 2)
            }
        }
    }
}

processLineByLine()
