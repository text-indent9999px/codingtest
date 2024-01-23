function solution(brown, yellow) {
    let brownCase = [];
    for(let i=1; i<brown/2; i++){
        for(let j=1; j<=i+2; j++){
            if(i+j === brown/2){
                brownCase.push([i+2,j]);
            }
        }
    }
    return brownCase.find((e => (e[0]-2)*(e[1]-2) === yellow));
}