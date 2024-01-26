function solution(answers) {
    this.sadMan1 = (idx) => idx%5+1;
    this.sadMan2 = (idx) => {
        let points = [1,3,4,5];
        return (idx % 2 === 0) ? 2 : points[Math.floor((idx - Math.floor(idx/8)*8)/2)]
    };
    this.sadMan3 = (idx) => {
        let points = [3,1,2,4,5];
        return points[ Math.floor(String(idx).slice(-1)/2) ];
    }
    let compareFunc = (f) => {
        return answers.reduce((acc,cur,idx)=>{
            if(cur === f(idx)){
                acc++;
            }
            return acc;
        },0);
    }
    let [result, compare] = [[], 0];
    for(let i=0; i<3; i++){
        let count = compareFunc(this['sadMan'+(i+1)]);
        if(count > compare){
            result = [i+1];
            compare = count;
        }else if(count == compare){
            result.push(i+1);
        }
    }
    return result;
}