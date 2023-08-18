module.exports = function reverse (n) {
    let naturalCount = Math.abs(n);
    let prepare = naturalCount.toString();
    let i = 0;
    let result = '';

    while (i < prepare.length) {
        result = `${prepare[i]}${result}`;
        i = i + 1;
    }
    prepare = Math.abs(result);
    return prepare;   
}