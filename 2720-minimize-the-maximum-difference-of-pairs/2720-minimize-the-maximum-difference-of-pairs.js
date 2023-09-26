/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function(nums, p) {
    
    // if(p == 0) {
    //     return 0
    // }

    // let arr = []

    // for(let i = 0; i < nums.length; i++){
    //     const hashmap = {}
    //     for(let j = i + 1; j < nums.length; j++) {
    //         if(nums[j] in hashmap) {
    //             hashmap[nums[j]] += 1
    //             continue
    //         } else {
    //             hashmap[nums[j]] = 0
    //         }
    //         arr.push(Math.abs(nums[i] - nums[j]))
    //     }
    //      //console.log(hashmap)
    // }

    // arr = arr.sort()
    // arr = [...new Set(arr)]
    // console.log(arr)

    // let max = 0
    // if(p == 1) {
    //     return arr[0]
    // }
    // if(arr.length == 2) {
    //     return arr[0]
    // }
    // for(let i = 0; i < p; i++) {
    //     if(arr[i] == 0) {
    //         max = arr[i+1]
    //     } else if(arr[i+1] > arr.length){
    //         console.log("its nan")
    //         continue
    //     }else {
    //         max = Math.abs(arr[i] - arr[i+1])
    //     }
    //     console.log(max)
    // }
    // //return arr[p-1]
    // return max


    // if(p == 0) {
    //     return 0
    // }

    // const arr = nums.sort((a, b) => a - b)
    // console.log(arr)

    // const outcome = []
    // for(let i = 0; i < arr.length; i += 2) {
    //     outcome.push( Math.abs(arr[i] - arr[i+1]) )
    // }
    // console.log(outcome)

    // return outcome[p-1]







  const n = nums.length;
  nums.sort((a, b) => a - b);
  let ans = null;
  let low = 0;
  let high = nums[n - 1];

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (isOk(nums, mid, p, n)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};

function isOk(nums, target, p, n) {
  let count = 0;
  let i = 0;
  while (i < n - 1) {
    if (nums[i + 1] - nums[i] <= target) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }

  return count >= p;

};