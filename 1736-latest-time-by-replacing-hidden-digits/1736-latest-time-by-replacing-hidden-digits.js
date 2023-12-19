/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {

    const arr = time.split("")  
      

    if(arr[0] === "?" && arr[1] === "?") { //both hrs are ? make it 23
        arr[0] = "2"
        arr[1] = "3"
    }  
    if(arr[0] === "?") { // first hr
        Number(arr[1]) >= 4 ? arr[0] = "1" : arr[0] = "2"
    }
    if(arr[1] === "?") { // second hr 
        arr[0] === "2" ? arr[1] = "3" : arr[1] = "9"
    }
    if(arr[3] === "?") { // first minute
        arr[3] = "5"
    }
    if(arr[4] === "?") { //second minute
        arr[4] = "9"
    }

    return arr.join("")

};