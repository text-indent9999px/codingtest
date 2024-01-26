function solution(answers) {
    this.man1 = [1, 2, 3, 4, 5];
    this.man2 = [2, 1, 2, 3, 2, 4, 2, 5];
    this.man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let count = [0,0,0];
    for(let i = 0; i < answers.length; i++) {
        for(let j = 1; j<=3; j++){
            let length = this['man'+j].length;
            if(answers[i] === this['man'+j][i % length]){
                count[j-1]++;
            }
        }
    }
    let max = Math.max(...count);
    return count.reduce((acc,cur,idx)=>{
        if(cur >= max){
            acc.push(idx+1);
        }
        return acc;
    },[]);
}