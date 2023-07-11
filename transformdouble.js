let changed = [1,3,4,2,6,8]
function toCheckOriginalVal(changed){
    let result = []
    for(let i=0;i<changed.length;i++){
        if(changed.includes(changed[i]/2)){
            result.push(Math.floor(changed[i]/2))
        }
    }
    return result
}

console.log(toCheckOriginalVal(changed))