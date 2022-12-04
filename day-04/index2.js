const fs = require('node:fs')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-04/input.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })

    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    let count = 0

    for await (const line of rl) {
        let splitArray = line.split(',')

        let firstArray = splitArray[0].split('-')
        let secondArray = splitArray[1].split('-')

        if (
            +firstArray[0] >= +secondArray[0] &&
            +firstArray[1] <= +secondArray[1]
        ) {
            count++
        } else if (
            +firstArray[0] <= +secondArray[0] &&
            +firstArray[1] >= +secondArray[1]
        ) {
            count++
        } else if (
            firstArray.includes(secondArray[0]) ||
            firstArray.includes(secondArray[1]) ||
            secondArray.includes(firstArray[0]) ||
            secondArray.includes(firstArray[1])
        ) {
            count++
        } else if (
            (+firstArray[0] >= +secondArray[0] &&
                +firstArray[0] <= secondArray[1]) ||
            (+firstArray[1] >= +secondArray[0] &&
                +firstArray[1] <= secondArray[1])
        ) {
            count++
        } else if (
            (+secondArray[0] >= +firstArray[0] &&
                +secondArray[0] <= firstArray[1]) ||
            (+secondArray[1] >= +firstArray[0] &&
                +secondArray[1] <= firstArray[1])
        ) {
            count++
        }
        console.log(count)
    }
}

processLineByLine()
