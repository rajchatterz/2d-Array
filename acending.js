let nums = [3,4,5,1,2]
function ascendingArr(nums){
    let left = 0;
    let right = nums.length-1
    while(left<right){
        let mid = Math.floor((left+right)/2)
        if(nums[mid]>nums[right]){
            left=mid+1
        }else{
            right=mid
        }
    }
    return left
}
console.log(ascendingArr(nums))