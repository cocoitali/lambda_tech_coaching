def search_in_sorted_matrix(matrix, target):
  # init row and col indices to keep track of where we are 
  # in the matrix 
  row = 0 
  col = len(matrix[0]) - 1
​
  # we'll traverse so long as the row index < len(matrix)
  # and column index >= 0
  while row < len(matrix) and col >= 0:
    # check if the value at these coordinates > target 
    # if it is, we can eliminate this column 
    if matrix[row][col] > target:
      col -= 1
    # if the value at these coordinates < target 
    # eliminate this row 
    elif matrix[row][col] < target:
      row += 1
    # otherwise, the value == target 
    else: 
      return [row, col]
  
  # we've traversed through the matrix and didn't find what 
  # we were looking for
  return [-1, -1]
​
​
  # r = num rows, c = num columns 
  # O(r log c) ~ O(n log n) if we have a square matrix 
​
  # with this strategy, helps when the target element lies 
  # within the range of the first row elements 
  # loop through each of the rows O(r)
    # check if the first row element > target 
      # if it is, skip to the next iteration 
    # if the first row element < target 
      # perform a binary search O(log c)
  # if we reach the of the loop, that means we searched through
  # every row in the matrix and didn't find what we were looking
  # for, so return [-1, -1]
​
  # we've figured out how to eliminate rows 
  # can we somehow do the same thing with the columns? 