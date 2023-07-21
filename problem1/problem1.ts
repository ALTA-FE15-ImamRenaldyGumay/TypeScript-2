console.log("Problem 1 - Pair with Target Sum")
function pairSum(arr: number[], target: number): [number, number]{
    let kiri = 0
    let kanan = arr.length - 1

    while (kiri < kanan){
        const sum = arr[kiri] + arr[kanan]

        if (sum === target){
            return [kiri, kanan]
        }else if (sum < target){
            kiri++
        }else{
            kanan--
        }
    }

    throw new Error("Pair not Found")
}

console.log(pairSum([1, 2, 3, 4, 6], 6))
console.log(pairSum([2, 5, 9, 11], 11))