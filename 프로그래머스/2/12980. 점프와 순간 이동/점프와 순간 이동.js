function solution(n)
{
    let spend = 0;
    while (n !== 0) {
        if (n % 2 === 1) {
            spend++;
            n -= 1;
        } else {
            n /= 2;
        }
    }
    return spend;
}