// Given a date string in the form Day Month Year, where:

// Day is in the set {"1st", "2nd", "3rd", "4th", ..., "30th", "31st"}.
// Month is in the set {"Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"}.
// Year is in the range [1900, 2100].
// Convert the date string to the format YYYY-MM-DD, where:

// YYYY denotes the 4 digit year.
// MM denotes the 2 digit month.
// DD denotes the 2 digit day.
 

// Example 1:

// Input: date = "20th Oct 2052"
// Output: "2052-10-20"
// Example 2:

// Input: date = "6th Jun 1933"
// Output: "1933-06-06"
// Example 3:

// Input: date = "26th May 1960"
// Output: "1960-05-26"
 

// Constraints:

// The given dates are guaranteed to be valid, so no error handling is necessary.


//solution

/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
    let arr = date.split(' ')
    let newArr = []
    for(let i = 0; i <arr.length; i++){
        if(i === 0){
            let w = arr[i].replace(/th|nd|rd|st/, '')
            if(w.length < 2){
                newArr.push(`0${w}`)
            }else{
                newArr.push(w)
            }
        }else if( i === 1){
            switch(arr[i]){
                case 'Jan': 
                    newArr.push('01');
                    break;
                case 'Feb': 
                    newArr.push('02');
                    break;
                case 'Mar': 
                    newArr.push('03');
                    break;
                case 'Apr': 
                    newArr.push('04');
                    break;
                case 'May': 
                    newArr.push('05');
                    break;
                case 'Jun': 
                    newArr.push('06');
                    break;
                case 'Jul': 
                    newArr.push('07');
                    break;
                case 'Aug': 
                    newArr.push('08');
                    break;
                case 'Sep': 
                    newArr.push('09');
                    break;
                case 'Oct': 
                    newArr.push('10');
                    break;
                case 'Nov': 
                    newArr.push('11');
                    break;
                case 'Dec': 
                    newArr.push('12');
                    break;
            }
        }else{
            newArr.push(arr[i])
        }
        
    }
    return newArr.reverse().join('-')
};