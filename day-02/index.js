const fs = require('node:fs')
const readline = require('node:readline')

async function processLineByLine() {
    const fileStream = fs.createReadStream('./day-02/input.txt')

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    })
    // Note: we use the crlfDelay option to recognize all instances of CR LF
    // ('\r\n') in input.txt as a single line break.
    let score = 0
    for await (const line of rl) {
        // Each line in input.txt will be successively available here as `line`.
        // A = 'rock' 1
        // B = 'paper' 2
        // C = 'scissors' 3

        let opponentChoice = line[0]
        let yourChoice = line[2]

        if (opponentChoice === 'A') {
            opponentChoice = 'rock'
        } else if (opponentChoice === 'B') {
            opponentChoice = 'paper'
        } else if (opponentChoice === 'C') {
            opponentChoice = 'scissors'
        }

        if (yourChoice === 'X') {
            yourChoice = 'lose'
        } else if (yourChoice === 'Y') {
            yourChoice = 'draw'
        } else if (yourChoice === 'Z') {
            yourChoice = 'win'
        }

        // console.log(`opp: ${opponentChoice}, you: ${yourChoice}`)

        // A = 'rock' 1
        // B = 'paper' 2
        // C = 'scissors' 3
        // X = 'lose' 0
        // Y = 'draw' 3
        // Z = 'win' 6

        if (opponentChoice + yourChoice === 'scissorslose') {
            score += 2
        } else if (opponentChoice + yourChoice === 'scissorsdraw') {
            score += 6
        } else if (opponentChoice + yourChoice === 'scissorswin') {
            score += 7
        } else if (opponentChoice + yourChoice === 'rocklose') {
            score += 3
        } else if (opponentChoice + yourChoice === 'rockdraw') {
            score += 4
        } else if (opponentChoice + yourChoice === 'rockwin') {
            score += 8
        } else if (opponentChoice + yourChoice === 'paperlose') {
            score += 1
        } else if (opponentChoice + yourChoice === 'paperdraw') {
            score += 5
        } else if (opponentChoice + yourChoice === 'paperwin') {
            score += 9
        } else {
            console.log('UH_OH')
        }

        // for first interpretation
        // if (opponentChoice + yourChoice === 'scissorsscissors') {
        //     score += 6
        // } else if (opponentChoice + yourChoice === 'rockpaper') {
        //     score += 8
        // } else if (opponentChoice + yourChoice === 'rockscissors') {
        //     score += 3
        // } else if (opponentChoice + yourChoice === 'scissorsrock') {
        //     score += 7
        // } else if (opponentChoice + yourChoice === 'scissorspaper') {
        //     score += 2
        // } else if (opponentChoice + yourChoice === 'paperrock') {
        //     score += 1
        // } else if (opponentChoice + yourChoice === 'paperscissors') {
        //     score += 9
        // } else if (opponentChoice + yourChoice === 'paperpaper') {
        //     score += 5
        // } else if (opponentChoice + yourChoice === 'rockrock') {
        //     score += 4
        // } else {
        //     console.log('UH_OH')
        // }

        console.log(opponentChoice + yourChoice)
        console.log(score)
    }
}

processLineByLine()
