function solution(operations) {
    let result = operations.reduce((acc,cur)=>{
        if(cur.charAt(0) == 'I'){
            acc.push(cur.split(' ')[1]);
        }else if(acc.length >= 1){
            if(cur.indexOf('-') > -1){
                let flag = true;
                acc = acc.filter(e=>{
                    if(e != Math.min(...acc) || ! flag){
                        return true;
                    }else{
                        if(flag) flag = false;
                    }
                });
            }else{
                let flag = true;
                acc = acc.filter(e=>{
                    if(e != Math.max(...acc) || ! flag){
                        return true;
                    }else{
                        if(flag) flag = false;
                    }
                });
            }
        }
        return acc;
    },[]);
    return (result.length === 0) ? [0,0] : [Math.max(...result), Math.min(...result)];
}
