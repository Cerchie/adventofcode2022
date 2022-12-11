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
        let arrayOfLetters = line.split('')

        //source for createWindows func: creating sliding windows in JS https://stackoverflow.com/questions/57001515/sliding-window-over-array-in-javascript]

        function createWindows(inputArray, size) {
            return inputArray.reduce((acc, _, index, arr) => {
                if (index + size > arr.length) {
                    //we've reached the maximum number of windows, so don't add any more
                    return acc
                }

                //add a new window of [currentItem, maxWindowSizeItem)
                return acc.concat(
                    //wrap in extra array, otherwise .concat flattens it
                    [arr.slice(index, index + size)]
                )
            }, [])
        }
        let arrayOfWindows = createWindows(arrayOfLetters, 14)

        for (let i = 0; i < arrayOfWindows.length; i++) {
            //finding dupes https://flexiple.com/javascript/find-duplicates-javascript-array/

            const toFindDuplicates = (array) =>
                array.filter((item, index) => array.indexOf(item) !== index)

            let duplicateElements = toFindDuplicates(arrayOfWindows[i])

            if (duplicateElements.length === 0) {
                //    get array
                //    see where that array is in the big arrayOfLetters
                let newSubstr = arrayOfWindows[i].toString()
                let noCommas = newSubstr.replaceAll(',', '')

                let firstIdx = line.indexOf(noCommas, 0)
                let numberBeforeDone = firstIdx + 14
                console.log(numberBeforeDone)
            }
        }
    }
}

processLineByLine()
