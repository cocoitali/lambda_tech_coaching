function countingValleys(n, s) {
    // input = UDDDUDUU
​
    // prevHeight = 0
    // valleyCounter = 0
    // elevationCounter = 0
    // for input in s {
        // if input == U
          // if elevationCounter == -1
            // valleyCounter += 1
          // elevationCounter += 1
        // if input == D 
          // elevationCounter -= 1
        // keep track of our previous height
        // in another variable 
        // if prevHeight < 0 and elevationCounter == 0
          // increment valleyCounter 
    // }
​
    // by the end of looping through the
    // input, elevationCounter == 0
​
    // convert string to integer values 
    // assign U's a value of 1 
    // assign D's a value of -1 
    // go through the input array,
    // create a new array with 1s and -1s 
    // based off the initial input array 
​
    // we always start and end hikes at 
    // elevation 0 
    // what constitutes a mountain/valley? 
    // stepping through the input 
    // keeping track of the offset 
    // if we see an up, offset + 1 
    // if we see a down, offset - 1
    // offset == elevation 
    // as soon as the offset goes below 0,
    // that's the start of a valley 
    // once the offset gets back to 0, that
    // is one valley 
}
​
function jumpingOnClouds(c) {
    // is jumping 2 steps always better than
    // jumping 1 step? 
    // trying to minimize number of jumps
    // if we can make a jump of 2, we should
    // always take that option 
    // sometimes we're put in a situation
    // where we have to either make a jump
    // of 1 or 2  
​
    // check the value of the next cloud 
    // and the cloud after that 
    // if you can jump on the cloud two 
    // spots away, else, jump on the cloud
    // one spot away 
​
    // keep track of number of jumps 
    // keep track of the index of the 
    // cloud we're currently on 
    // while true {
        // if cloud + 2 < c.length and c[clouds + 2] === 0 
          // cloud += 2
          // jumps += 1
        // else if cloud + 1 < c.length and 
        // c[clouds + 1] === 0
          // cloud += 1
          // jumps += 1
        // else break
    // }
    // return number of jumps 
}