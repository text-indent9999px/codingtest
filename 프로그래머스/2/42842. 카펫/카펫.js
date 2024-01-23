function solution(brown, yellow) {
    let brownCase = [];
    for(let i=1; i<brown/2; i++){
        for(let j=1; j<=i+2; j++){
            if(i+j === brown/2 && (i)*(j-2) === yellow){
                brownCase = [i+2,j];
            }
        }
    }
    return brownCase;
}