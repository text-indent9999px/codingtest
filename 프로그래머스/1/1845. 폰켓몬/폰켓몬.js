function solution(nums) {
    let set = new Set([...nums]);
    return (nums.length/2 > set.size) ? set.size : nums.length/2;
}