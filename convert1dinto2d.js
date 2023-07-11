let arr = [1,2,3,4]
let m = 2;
let n = 2;
function convert1dto2d(arr,m,n){
    let result = []
    for(let i=0;i<arr.length;i+=n){
            result.push([arr[i],arr[i+1]])
        }
        
        return result
}
console.log(convert1dto2d(arr,m,n))