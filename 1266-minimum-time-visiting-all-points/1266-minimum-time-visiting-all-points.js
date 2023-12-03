/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    
    let count = 0;
    for (let i = 0; i < points.length-1 ; i++) {

        const timex = Math.abs(points[i][0] - points[i + 1][0]);
        const timey = Math.abs(points[i][1] - points[i + 1][1]);
        // Compare and update count
        count =count+  Math.max(timex, timey);  //take the max diff for time of travel
        // console.log("Looking at point:", points[i])
        // console.log("timex:", timex)
        // console.log("timey:", timey)
    }
    return count;
    
    
};