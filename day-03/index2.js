const fs = require('node:fs')
const readline = require('node:readline')

const lowerCaseMap = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
}

const upperCaseMap = {
    A: 27,
    B: 28,
    C: 29,
    D: 30,
    E: 31,
    F: 32,
    G: 33,
    H: 34,
    I: 35,
    J: 36,
    K: 37,
    L: 38,
    M: 39,
    N: 40,
    O: 41,
    P: 42,
    Q: 43,
    R: 44,
    S: 45,
    T: 46,
    U: 47,
    V: 48,
    W: 49,
    X: 50,
    Y: 51,
    Z: 52,
}

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

        // https://flaviocopes.com/how-to-cut-array-half-javascript/

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
        // console.log('ARRAY', arrayOfThrees)

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
