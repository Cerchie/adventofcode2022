const fs = require('node:fs')
const readline = require('node:readline')

// [P]     [L]         [T]
// [L]     [M] [G]     [G]     [S]
// [M]     [Q] [W]     [H] [R] [G]
// [N]     [F] [M]     [D] [V] [R] [N]
// [W]     [G] [Q] [P] [J] [F] [M] [C]
// [V] [H] [B] [F] [H] [M] [B] [H] [B]
// [B] [Q] [D] [T] [T] [B] [N] [L] [D]
// [H] [M] [N] [Z] [M] [C] [M] [P] [P]
//  1   2   3   4   5   6   7   8   9

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-05/input.txt')

    let stack1 = ['P', 'L', 'M', 'N', 'W', 'V', 'B', 'H']
    let stack2 = ['H', 'Q', 'M']
    let stack3 = ['L', 'M', 'Q', 'F', 'G', 'B', 'D', 'N']
    let stack4 = ['G', 'W', 'M', 'Q', 'F', 'T', 'Z']
    let stack5 = ['P', 'H', 'T', 'M']
    let stack6 = ['T', 'G', 'H', 'D', 'J', 'M', 'B', 'C']
    let stack7 = ['R', 'V', 'F', 'B', 'N', 'M']
    let stack8 = ['S', 'G', 'R', 'M', 'H', 'L', 'P']
    let stack9 = ['N', 'C', 'B', 'D', 'P']

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        let destinationColumn = +line.charAt(line.length - 1)

        let choppedString = line.slice(5)

        let numberToMove =
            typeof +choppedString.charAt(1) === 'number'
                ? +(choppedString.charAt(0) + choppedString.charAt(1))
                : choppedString.charAt(0)

        let finalChop =
            typeof +choppedString.charAt(1) === 'number'
                ? choppedString.slice(7)
                : choppedString.slice(6)

        let sourceColumn

        if (finalChop.charAt(0) === ' ') {
            sourceColumn = finalChop.charAt(1)
        } else {
            sourceColumn = finalChop.charAt(0)
        }

        console.log('NUMBER', numberToMove)
        console.log('SOURCE', sourceColumn)
        console.log('DESTINATION', destinationColumn)
        console.log(`Line from file: ${line}`)
    }
}

processLineByLine()
