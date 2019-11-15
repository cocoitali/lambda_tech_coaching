// Sean's Notes

// can we use binary search in this case?
// we need access to the middle node (indexing)
// more generally, in order to perform a binary search
// we need to be able to access every element in the
// collection efficiently 
​
// but in this case, our collection is a linked list 
// we can find the length of the linked list, but
// that involves traversing the whole list 
// once we find the midpoint position, we'd have 
// to start at the head and traverse the list 
// until we reached the position in question 
​
function sortedInsert(head, data) {
    // assign a current value to the head 
    // this is used to keep track of where we 
    // currently are in the linked list 
    let current = head;
​
    const newNode = new DoublyLinkedListNode();
    newNode.data = data;
    newNode.next = head;
​
    if (data < head.data) {
        head.prev = newNode;
        return newNode;
    }
    // iterate through our dll one by one 
    while (current) {
        // compare the input data and value of the
        // current node
        // if the input data < current node's data
        if (data < current.data) {
            // put the input data in a node 
            // connect this node to the prev and 
            // next nodes at this spot 
            newNode.next = current;
            newNode.prev = current.prev;
            current.prev.next = newNode;
            current.prev = newNode;
            break;
        } else if (current.next === null) {
        // if the current node is null 
            // then we've reached the end of the list
            // make the input data the new tail 
            current.next = newNode;
            newNode.prev = current;
            newNode.next = null;
            break;
        }
​
        current = current.next;
    }
    // return the head 
    return head;
}



///////---------------------------------------------------

// 1ST implementation
function sortedInsert(head, data) {
    var node = new DoublyLinkedListNode(data);
    
    var preNode = head;
    var currentNode = head.next;
    
  
    if(preNode.data > data){
        head = node;
        node.next = preNode;
        preNode.prev = node;
        node.prev = null;
        return head;
    }
    
           
    while(currentNode && currentNode.data < data){
            preNode = currentNode;
            currentNode = currentNode.next;
        }
    preNode.next = node;
    node.prev = preNode;
    node.next = currentNode;
    if(currentNode){
        currentNode.prev = node;
    }
    return head;
​
}


//-------------------------------------------------------

// 2nd implementation
function sortedInsert(head, data) {
    const newNode = new DoublyLinkedListNode(data);
    let currentNode = head;
    while (currentNode) {
      // if our current node is greater than our data
      // we're ready to insert
      if (currentNode.data > data) {
        newNode.prev = currentNode.prev;
        newNode.next = currentNode;
        // check if we're reassigning a new head here
        // since we could have data less than our first node
        currentNode.prev ? (currentNode.prev.next = newNode) : (head = newNode);
        currentNode.prev = newNode;
        break;
      } else if (!currentNode.next) {
        // we're appending to the end of the list at this point
        currentNode.next = newNode;
        newNode.prev = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }
    return head;
  }
  