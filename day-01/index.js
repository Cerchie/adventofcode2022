const fs = require('node:fs')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-01/calories.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    let arrayOfSums = []
    let miniArray = []
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        // console.log(`Line from file: ${+line}`)

        if (+line !== 0) {
            miniArray.push(+line)
        } else if (+line === 0) {
            arrayOfSums.push(miniArray)
            miniArray = []
        }
    }

    // find the sum of each array in arrayOfSums  https://bobbyhadz.com/blog/javascript-get-sum-of-array-of-numbers
    let arrayOfVals = []
    for (let i = 0; i < arrayOfSums.length; i++) {
        const sum = arrayOfSums[i].reduce((accumulator, value) => {
            return accumulator + value
        }, 0)

        arrayOfVals.push(sum)
    }

    // find the max value https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    console.log(Math.max(...arrayOfVals))
}

processLineByLine()

// resource on how to read lines in a file https://nodejs.org/api/readline.html#readline_example_read_file_stream_line_by_line
