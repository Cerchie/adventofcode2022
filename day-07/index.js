const fs = require('node:fs')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-07/test.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    let arrayOfDirectories = ['/']
    let arrayOfLines = []
    for await (const line of rl) {
        arrayOfLines.push(line)
    }

    function containsNumbers(str) {
        return /\d/.test(str)
    }
    arrayOfDirs = []
    //https://codingbeautydev.com/blog/javascript-check-if-string-contains-numbers/#:~:text=To%20check%20if%20a%20string%20contains%20numbers%20in%20JavaScript%2C%20call,Otherwise%2C%20it%20will%20return%20false%20.&text=The%20RegExp%20test()%20method,regular%20expression%20and%20a%20string.
    for (let i = 0; i < arrayOfLines.length; i++) {
        if (arrayOfLines[i].includes('dir')) {
            arrayOfDirs.push(arrayOfLines[i])
        }
    }
    for (let i = 0; i < arrayOfDirs.length; i++) {
        let idx1 = arrayOfLines.indexOf(arrayOfDirs[i])
        let idx2 =
            arrayOfLines.indexOf(arrayOfDirs[i + 1]) !== -1
                ? arrayOfLines.indexOf(arrayOfDirs[i + 1])
                : arrayOfLines.length - 1

        console.log('IDXS', idx1, idx2)

        console.log('LINES', arrayOfLines)
        console.log('IDXS', idx1, idx2)
        console.log('SLICE', arrayOfLines.slice(idx1, idx2))
        let sliceBtw = arrayOfLines.slice(idx1, idx2)
        //getting there, but need to account for cd's
    }
}

processLineByLine()
