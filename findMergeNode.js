function findMergeNode(headA, headB) {
    // iterate along one of the lists 
    // mark every node we visit (or put them in a set)
    // start iterating along the other head
    // how do we know when we've encountered the merge point?
    // as soon as we encounter a node that is marked
    // as visited, then that's the merge point 
​
    let c1 = headA;
    let c2 = headB;
    // iterate along both lists at the same time 
    while (c1 && c2) {
    // while iterating along both lists, mark their
    // respective nodes as visited 
    // have each ref check if the current node is visited
    // if it isn't
        if (!c1.visited) {
            // mark it as visited 
            c1.visited = true;
        } else {
            // we've run into a visited node 
            return c1.data;
        }
        if (!c2.visited) {
            c2.visited = true;
        } else {
            return c2.data;
        }
        c1 = c1.next;
        c2 = c2.next;
    }
    // at this point, one of the refs has reached
    // the end of the list 
    if (c1 !== null) {
        while (c1) {
            if (c1.visited) {
                return c1.data;
            }
            c1 = c1.next;
        }
    }
    if (c2 !== null) {
        while (c2) {
            if (c2.visited) {
                return c2.data;
            }
            c2 = c2.next;
        }
    }
    // but the other ref hasn't encountered a visited
    // node yet 
    // we need to continue iterating the other ref
    // until it finds a visited node  
}