function solution(a, b) {
    let result = new Date('2016-'+ a +'-' + b).toString().slice(0,3).toUpperCase();
    return result;
}