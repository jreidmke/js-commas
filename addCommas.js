function addCommas(num) {
    const numArr = String(num).split('');
    const start = !numArr.includes('.') ? numArr.length - 1 : numArr.indexOf('.') - 1;
    for(let i = start - 2; i >= 0; i-=3) {
        numArr.splice(i, 0, ',');
    }
    return num;
}


addCommas(-3141592.65);
module.exports = addCommas;