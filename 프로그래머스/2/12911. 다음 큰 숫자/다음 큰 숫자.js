function solution(n) {
    let num = n+1,
        nCount = (n.toString(2).match(/1/g)||[]).length;
    while( (num.toString(2).match(/1/g) || []).length !== nCount){
        num ++;
    }
    return num;
}