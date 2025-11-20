/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
    //first make map
    //make an helper function for handling the sum of the digits in a number;
    // loop through the number, keep adding it to the map;
    //loop through the map find the max size;
    //loop through the map find the answer

    let map = new Map()
    const digitsum = (x) =>{
        let s = 0;
        while(x > 0){
            s = s + (x % 10);
            x = Math.floor(x/10)
        }
        return s;
    }
    for(let i = 1; i <= n; i++){
        let a = digitsum(i);
        map.set(a, (map.get(a) || 0) + 1);
    }
    let maxsize = 0;
    console.log(map)
    for(let [key,value] of map){
        if(value > maxsize) maxsize = value;
    }
    
    let result = 0;
    for(let [key, value] of map){
        if(value === maxsize) result++;
    }
    return result;
};