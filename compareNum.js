let num1 = [1,2,3]
let num2 = [2,4,6]
function compareTwoNum(num1,num2){
    let result1 = []
    let result2 = []
    let newSet1 = new Set(num1)
    let newSet2 = new Set(num2)
    for(let num of newSet1){
        if(!newSet2.has(num)){
            result1.push(num)
        }
    }
    for(let num of newSet2){
        if(!newSet1.has(num)){
            result2.push(num)
        }
    }
    return [result1,result2]

}
console.log(compareTwoNum(num1,num2))