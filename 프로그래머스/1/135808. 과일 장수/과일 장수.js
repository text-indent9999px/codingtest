function solution(k, m, score) {
    return score.sort((a,b)=>b-a).reduce((acc,cur,idx,src)=>{
        if((idx+1) % m === 0){
            acc += cur*m;  
        }
        return acc;
    },0);
}