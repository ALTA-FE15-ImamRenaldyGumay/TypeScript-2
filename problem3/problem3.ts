console.log("Probelem 3 - Diamond")
function printDiamond(letter: string): void{
    if (letter < "A" || letter > "Z"){
        throw new Error("Input harus merupakan huruf kapital antara A hingga Z")
    }

    const diamodSize = letter.charCodeAt(0) - "A".charCodeAt(0) + 1
    const maxLetter = "Z".charCodeAt(0)
    let currentLetter = "A"

    for (let i = 0; i < diamodSize * 2 - 1; i++){
        const spaces = Math.abs(diamodSize - 1 - i)
        const sideSpaces = " ".repeat(spaces)
        let row = sideSpaces

        for (let j = 0; j < diamodSize - spaces; j++){
            row += currentLetter
            if (currentLetter.charCodeAt(0) < maxLetter){
                row += sideSpaces
            }
            currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1)
        }

        console.log(row)
        currentLetter = String.fromCharCode("A".charCodeAt(0) + Math.min(i + 1, diamodSize - 1))
    }
}

const inputLetter = "C"
printDiamond(inputLetter)