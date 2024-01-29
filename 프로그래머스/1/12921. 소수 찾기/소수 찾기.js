function solution(n) {
    let result = 1;
    if(n > 2){
        for(let i=3; i<=n; i++){
            let [test, flag] = [i, false];
            if(test % 2 !== 0){
              const sqrt = parseInt(Math.sqrt(test));
              for( let divider = 3; divider <= sqrt; divider += 2) {
                if(test % divider === 0) {
                    flag = true;
                    break;
                }
              }
            }else{
                flag = true;
            }
            if(! flag) result ++;
        }
    }
    return result;
}

