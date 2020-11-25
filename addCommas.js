function addCommas(num) {
    if(typeof num !== "number") {
        throw Error("Input must be number!");
    }
    const numArr = String(num).split('');
    const start = !numArr.includes('.') ? numArr.length - 1 : numArr.indexOf('.') - 1;
    for(let i = start - 2; i >= 0; i-=3) {
        numArr.splice(i, 0, ',');
    }
    return numArr.join('');
}

