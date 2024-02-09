function solution(dartResult) {
    let test = /([0-9]*[A-Z][*#]?)/g;
    let result = dartResult.match(test).reduce((acc,cur,idx)=>{
        let test2 = /([0-9]*)([A-Z])([*#]?)/;
        let number = cur.match(test2)[1];
        let bonus = (cur.match(test2)[2] === 'S') ? 1 : 
        (cur.match(test2)[2] === 'D') ? 2 : 3;
        let option = (cur.match(test2)[3] === '') ? 1 : 
        (cur.match(test2)[3] === '*') ? 2 : -1;
        number = (number**bonus)*option;
        acc.push(number);
        if(idx > 0 && option === 2){
            acc[idx-1] = acc[idx-1]*option;
        }
        return acc;
    },[])
    return result.reduce((acc,cur)=>acc+cur,0);
}