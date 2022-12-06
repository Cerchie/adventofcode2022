const fs = require('node:fs')
const { type } = require('node:os')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-05/input.txt')

    let stackObject = {
        stack1: ['H', 'B', 'V', 'W', 'N', 'M', 'L', 'P'],
        stack2: ['M', 'Q', 'H'],
        stack3: ['N', 'B', 'D', 'G', 'F', 'Q', 'M', 'L'],
        stack4: ['Z', 'T', 'F', 'Q', 'M', 'W', 'G'],
        stack5: ['M', 'T', 'H', 'P'],
        stack6: ['C', 'B', 'M', 'J', 'D', 'H', 'G', 'T'],
        stack7: ['M', 'N', 'B', 'V', 'F', 'R'],
        stack8: ['P', 'L', 'H', 'M', 'R', 'G', 'S'],
        stack9: ['P', 'D', 'B', 'C', 'N'],
    }

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.

    for await (const line of rl) {
        console.log('LINE', line)
        // Each line in input.txt will be successively available here as `line`.
        let destinationColumn = +line.charAt(line.length - 1)

        let choppedString = line.slice(5)

        let numberToMove =
            typeof +choppedString.charAt(1) === 'number'
                ? +(choppedString.charAt(0) + choppedString.charAt(1))
                : +choppedString.charAt(0)

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

        if (Object.keys(stackObject).includes(`stack${sourceColumn}`)) {
            let returnedLetterArray = stackObject[`stack${sourceColumn}`]

            let arrayToPush = returnedLetterArray.splice(
                returnedLetterArray.length - numberToMove,
                numberToMove
            )

            let destinationArray = stackObject[`stack${destinationColumn}`]
            for (let i = 0; i < arrayToPush.length; i++) {
                destinationArray.push(arrayToPush[i])
            }
        }
        letLastLetterInEachArray = `${
            stackObject[`stack${1}`][stackObject[`stack${1}`].length - 1]
        }${stackObject[`stack${2}`][stackObject[`stack${2}`].length - 1]}${
            stackObject[`stack${3}`][stackObject[`stack${3}`].length - 1]
        }${stackObject[`stack${4}`][stackObject[`stack${4}`].length - 1]}${
            stackObject[`stack${5}`][stackObject[`stack${5}`].length - 1]
        }${stackObject[`stack${6}`][stackObject[`stack${6}`].length - 1]}${
            stackObject[`stack${7}`][stackObject[`stack${7}`].length - 1]
        }${stackObject[`stack${8}`][stackObject[`stack${8}`].length - 1]}${
            stackObject[`stack${9}`][stackObject[`stack${9}`].length - 1]
        }`
        console.log(letLastLetterInEachArray)
    }
}

processLineByLine()
