function solution(s) {
    return (' ' + s).toLowerCase().replace(/\s([a-z]{1})/g, (a) => a.toUpperCase()).slice(1);
}
