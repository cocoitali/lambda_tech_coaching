// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps Hacker Rank Practice Problem

// SEAN'S NOTES
// have a function that handles the 1 operation
function op1(map, val) { // O(1)
    // insert the val into the map 
    // if the val already exists in the map
    // now also have to update the frequencies map 
    if (map[val]) { 
        // check if map[val] we need to decrement the
        // frequency of map[val]
        // increment its value 
        map[val]++;
        // increment frequecy of map[val] in the frequency map
    } else {
        // otherwise, add it to the map with a value of 1
        map[val] = 1;
        // add map[val] to our frequencies map 
    }
}
// have a function that handles the 2 operation
function op2(map, val) {  // O(1)
    // delete the val from the map 
    // if the val already exists in the map
    if (map[val]) {
        // decrement the old frequency of map[val]
        // decrement its value 
        map[val]--;
        // increment the new frequency in map[val]
    }
    // otherwise, we don't do anything 
} 
// have a function that handles the 3 operation 
// function op3(map, val) { 
//     // check if any of the key value pairs have a value
//     // of val 
//     // loop through every kv pair
//     const values = Object.values(map);  // O(n)
//     for (let i = 0; i < values.length; i++) { // O(n)
//         // check if the current kv pair's value === val 
//         if (values[i] === val) {
//             // if it does, return 1
//             return 1;
//         }
//     }
//     // return 0
//     return 0;
// }
​
function op3(frequencies, val) {  // O(1)
    if (frequencies[va]) {
        return 1;
    }
    return 0;
}
​
// Complete the freqQuery function below.
function freqQuery(queries) {
    // create the create function 
    // init an array for our answers
    const answers = []; 
    // use an object for our data structure 
    const map = {};
    // have a frequencies map that stores frequencies 
    // as keys and # of occurrences of those freqs
    // as values (to handle collision) 
    const frequencies = {};
    // assume we have those three helper functions defined 
    // loop through the queries O(n)
    for (let i = 0; i < queries.length; i++) {
        const op = queries[i][0];
        const val = queries[i][1];
​
        // if currentQuery[0] === 1
        if (op === 1) {
            // insert x into our data structure
            // call our insert helper function 
            op1(map, val);
        } else if (op === 2) {
        // if currentQuery[0] === 2
            // call our delete helper function 
            op2(map, val);
        } else {  // O(n^2)
        // if currentQuery[0] === 3 
            // call our checkFrequency helper function
            answers.push(op3(map, val));  // O(1)
        }
    }
    // return our answers array 
    return answers; 
}





//2ND IMPLEMENTATION
function freqQuery(queries) {
    const occurrences = {};
    const frequencies = {};
    const results = [];
  ​
    for (const [operation, value] of queries) {
      if (operation === 1) {
        frequencies[occurrences[value]]--;
        occurrences[value] = (occurrences[value] || 0) + 1;
        frequencies[occurrences[value]] = (frequencies[occurrences[value]] || 0) + 1;
      } else if (operation === 2 && occurrences[value]) {
        frequencies[occurrences[value]]--;
        occurrences[value]--;
        frequencies[occurrences[value]]++;
      } else if (operation === 3) {
        results.push(frequencies[value] > 0 ? 1 : 0);
      }
    }
  ​
    return results;
  }