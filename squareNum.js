let nums = [-4,-1,0,3,10]
function squareNum(nums){
    let result = []
    for(let i=0;i<nums.length;i++){
        result.push(nums[i]**2)
    }
    let final = result.sort((a,b)=>a-b)
    return final

}
console.log(squareNum(nums))