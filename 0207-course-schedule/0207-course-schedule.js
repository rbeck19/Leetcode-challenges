/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


const buildAdjlist = (n, edges) => {
    //create a Array of length n, each element is a new empty array
    const adjList = Array.from({length: n}, () => [])
    for(let edge of edges) {
        let [src, dest] = edge
        adjList[src].push(dest)
    }
    return adjList
}
const hasCycleDFS = (node, adjList, visited, arrive, depart) => {
    arrive[node]++
    visited[node] = true

    for(let neighbor of adjList[node]) {
        if(!visited[neighbor]) {
            visited[neighbor] = true

            if(hasCycleDFS(neighbor, adjList, visited, arrive, depart)) return true
        } else {
            if(depart[neighbor] === 0) return true
        }
    }

    depart[node]++
    return false
}
var canFinish = function(numCourses, prerequisites) {

    const adjList = buildAdjlist(numCourses, prerequisites)
    const visited = []
    const arrive = Array.from({length: numCourses}, () => 0)
    const depart = Array.from({length: numCourses}, () => 0)

    for(let vertex = 0; vertex < adjList.length; vertex++) {
        if(!visited[vertex]) {
            if(hasCycleDFS(vertex, adjList, visited, arrive, depart)) return false
        }
    }

    return true

    // let courseTaken = 0
    // prerequisites = prerequisites.sort((a,b) => a[0] - b[0])
    // for(let i = 0; i < prerequisites.length; i++) {
    //     if(prerequisites[0] > courseTaken) {
    //         courseTaken = prerequisites[0]
    //     } else {
    //         return false
    //     }
    // }
    // return true
};