function solution(s)
{
    let stack = [];
    for(i=0;i<s.length;i++){
        if(i < 0 || s[i] !== stack[stack.length-1]) stack.push(s[i]);
        else stack.pop();
    }
    return stack.length > 0 ? 0 : 1;
    
}
