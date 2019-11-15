function twoStrings(s1, s2) {
    // step 2: coming up with a strategy 
    // WHAT we do to solve the problem 
​
    // keep track of the count of similar characters 
    // between the two strings we're comparing
    // character map or a map of char frequencies 
​
    // how do we get the frequency of each char into 
    // our character map? 
​
    // O(n^2)
    // string.includes 
    // split s2
    // loop over the split string char by char   O(n)
        // if s1.includes(char)  O(n) 
            // return "YES"
    // return "NO"
​
    // O(n^2) time, O(1) space 
    // indexOf
    // loop over the chars of s1   O(n)
        // if s2.indexOf(char) !== -1   O(n)
            // return "YES"
    // return "NO"
​
    // O(n + m) 
    // if n ~ m => O(2*n) => O(n)
    // creating a map O(n) space 
    const map = {};
    // store all the chars in the first string 
    // in the map, setting their values to true
    // loop over the first string  O(n)
    for (let i = 0; i < s1.length; i++) {
        // store each char in the map  O(1)
        // if the current char is not in
        // the map 
        if (!map[s1[i]]) {
            // add it to the map with a value
            // of true  
            map[s1[i]] = true;
        }
    }
    // loop over the second string  O(m)
    for (let i = 0; i < s2.length; i++) {
        // check whether the current string  O(1)
        // exists in the map 
        if (map[s2[i]]) {
            // if it does 
            // return "YES"
            return "YES";
        }
    }
    // return "NO"
    return "NO";
​
    // we're trying to find values that are substrings
    // iterate through the first string char by char 
        // compare the current char with the first
        // char of the second string 
​
    // step 3: start implementing the problem 
    // HOW we implement the strategy we came up with 
​
}
​
// solution that utilizes sets
function twoStrings(s1, s2) {
	// initialize a set with the chars of s1
	const set1 = new Set(s1);
    
	// iterate through chars of s2
    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];
		// check if the char is in the set
        if (set1.has(char)) {
            return "YES";
     
        }
        
    }
	// if we've gotten through the entire loop, then
	// none of the chars in s2 were in the set 
    return "NO";