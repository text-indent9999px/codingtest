function solution(N, stages) {
    let stagesArr = Array.from({ length: N }, (_, i) => i+1).reduce((obj, current) => {
        obj[current] = [0,0,current];
        return obj;
    }, []);
    for(stage of stages){
        let clearStage = stage-1,
            failStage = stage;
        if(!! stagesArr[failStage]){
            stagesArr[failStage][1]++;
        }
        for(let i=1; i<failStage; i++){
            stagesArr[i][0]++;
        }
    }
    stagesArr.sort((a, b) => b[1]/b[0] - a[1]/a[0] || a[2] - b[2]);
    return stagesArr.reduce((acc,cur)=>{
        acc.push(cur[2]);
        return acc;
    },[])
}