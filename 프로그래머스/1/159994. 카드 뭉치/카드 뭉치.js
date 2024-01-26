function solution(cards1, cards2, goal) {
    let resultArr = [];
    for(let i=0; i<goal.length; i++){
        if(goal[i] === cards1[0]){
            cards1.splice(0,1);
            resultArr.push(goal[i]);
        }else if(goal[i] === cards2[0]){
            cards2.splice(0,1);
            resultArr.push(goal[i]);
        }else{
            break;
        }
    }
    return (resultArr.join('') === goal.join('')) ? 'Yes' : 'No';
}
