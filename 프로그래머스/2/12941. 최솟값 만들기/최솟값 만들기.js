function solution(A,B){
    let test1 = A.sort((a,b)=>a-b);
    let test2 = B.sort((a,b)=>b-a);
    let result = 0;
    for(var i=0; i<test1.length; i++){
        result += test1[i] * test2[i];
    }
    return result;
}