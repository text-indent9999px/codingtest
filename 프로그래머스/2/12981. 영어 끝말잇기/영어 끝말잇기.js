function solution(n, words) {
    return words.reduce((acc,cur,idx,src)=>{
        if(idx >= 1 && acc[0] === 0){
            let flag = true;
            if(src[idx-1].slice(-1) !== cur.slice(0,1)){
                flag = false;
            }else{
                let beforeCheck = src.findIndex((e) => e === cur);
                if(beforeCheck !== idx){
                    flag = false;
                }
            }
            if(! flag){
                acc[0] = (idx%n) + 1;
                acc[1] = Math.floor(idx/n) + 1;
            }
        }
        return acc;
    },[0,0]);
}