# linear in the number of operands 
def evaluate(operator, operands):
  # if operator == '&': 
    # reduce over the operands using `&`
  # if operator == '|':
    # reduce over the operands using `|`
  # if operator == '!':
    # flip the first operand 
​
  # return our evaluated answer 
​
example = '[|, 1, 0]'
​
def parse_eval(expr):
  # operator is the char at index 1
  # init pos to index 4, where the first 
  # char we care about is 
​
  # loop so long as the char at pos is not `]`
    # if we encounter a `[` 
      # recurse, passing the recursive call the current
      # character in the string all the way to the end
      # add the returned answer to operands
      # update our `pos` index to move past the nested 
      # subexpression 
​
    # if we encounter a 0 or 1
      # add it to operands 
​
    # update pos    
​
  # return the result of evaluating the operands
  # with the operator, along with the position
  
​
# def contains(arr, target):
#   if arr[-1] == target:
#     return true
#   return contains(arr[:-1], target)
​
'''
Given a sorted array of distinct non-negative integers, find the smallest missing element in it.
​
Examples:
Input: A = [0, 1, 2, 6, 9, 11, 15] 
Output: The smallest missing element is 3
​
Input: A = [1, 2, 3, 4, 6, 9, 11, 15] 
Output: The smallest missing element is 0
​
Input: A = [0, 1, 2, 3, 4, 5, 6] 
Output: The smallest missing element is 7
'''
​
def solution_1(arr):
  # loop through each element in arr 
  # compare the current element to the element right after it 
  # if the next element != current element + 1
  # return current element + 1 as our smallest missing element 
​
def solution_2(arr):
  # find the midpoint index of the array 
  # compare the element at the midpoint to its index 
  # if element != its own index, then the smallest missing element must be on the left side 
    # set our midpoint to the midpoint of the left half of the array
  # otherwise, if element == its own index, then smallets missing must be on the right sorted
    # set our midpoint to the midpoint of the right half of the array