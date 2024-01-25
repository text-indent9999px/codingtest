function solution(k, score) {
    let stack = [];
    let result = score.reduce((acc,cur,idx)=>{
        if(idx<k){
            stack.push(cur);
        }else{
            if(cur > stack[0]){
                stack.splice(0,1,cur);
            }
        }
        stack.sort((a,b)=>a-b);
        acc.push(stack[0]);
        return acc;
    },[]);
    return result;
}