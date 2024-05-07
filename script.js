
function copyArraye(arraye) {
    const outPut = []
    for (let i = 0; i < arraye.length; i++) {
        outPut.push(arraye[i] * 2)
    }

    return outPut
}
const myArraye = [1, 2, 3 ,4,5,6]
const result = copyArraye(myArraye)
console.log(result)
