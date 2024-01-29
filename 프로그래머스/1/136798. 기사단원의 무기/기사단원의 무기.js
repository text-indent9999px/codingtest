function solution(number, limit, power) {
    let result = 0;
    for(let i=1; i<=number; i++){
        let check = {};
        let [test, test2] = [i,2];
        while(test !== 1){
            if(test % test2 === 0){
                check[test2] = 1;
                test = test/test2;
                while(test % test2 === 0){
                    check[test2]++;
                    test = test/test2;
                }
            }else{
                test2++;
            }
        }
        let count = Object.values(check).reduce((acc,cur)=>acc*(cur+1),1);
        if(count > limit) count = power; 
        result += count;
    }
    return result;
}
