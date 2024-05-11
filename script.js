function copyArraye(arraye, instruction) {
    const outPut = [];
    for (let i = 0; i < arraye.length; i++) {
        outPut.push(instruction(arraye[i]));
    }

    return outPut;
}

function multiOlay(input) {
    return input * 2;
}

const result = copyArraye([1, 2, 3, 4, 5], multiOlay);
console.log(result);
//
const area = function (redius) {
    return Math.PI * redius * redius;
};

const diameter = function (redius) {
    return 2 * redius;
};

function calcCircle(rediuses, callback) {
    const output = [];
    for (let i = 0; i < rediuses.length; i++) {
        output.push(callback(rediuses[i]));
    }

    return output;
}

calcCircle(r, diameter);
