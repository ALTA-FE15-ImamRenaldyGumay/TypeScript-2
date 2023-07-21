console.log("Problem 2 - Cetak Tabel Perkalian")
function printMultiplicationTable(angka: number): void{
    if (angka < 1 || angka > 30){
        throw new Error("Input harus berada dalam rentang 1 hingga 30")
    }

    for (let i = 1; i <= angka; i++){
        let row = ""
        for (let j = 1; j <= 10; j++){
            const product = i * j
            row += product.toString().padStart(4, " ") + "\t"
        }
        console.log(row)
    }
}

const angka = 2
printMultiplicationTable(angka)