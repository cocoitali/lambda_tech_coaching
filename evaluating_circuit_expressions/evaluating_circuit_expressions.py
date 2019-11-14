# // # Evaluating Circuit Expressions

# // ## Problem Statement

# // A circuit expression consists of the following symbols:

# //  - `[]` denotes operation precedence
# //  - `&` denotes the logical AND operation
# //  - `|` denotes the logical OR operation
# //  - `!` denotes the logical NOT operation
# //  - `1` denotes logical true 
# //  - `0` denotes logical false 

# // Write a function that receives an array of strings, where each string
# // represents a circuit expression. Your function should evaluate the circuit
# // expression and return the answer, either `1` or `0`. 

# // For example, given the following input:

# // ```
# // 1
# // [|, [&, 1, [!, 0]], [!, [|, [|, 1, 0], [!, 1]]]]
# // ```

# // Your function should return `1`. The evaluation of the expression occurs in the
# // following steps:

# // ![order_of_operations](https://user-images.githubusercontent.com/4572868/68636647-0f183f00-04f4-11ea-8464-60686aa3ebe5.png)

# // So the overall expression evaluates to `1`.

# get something working that solves the simplest case 
# different operators may require different numbers of operands 
# !: flips the operator 
# &: if there is a single 0, returns 0 
# |: if there is a single 1, returns 1 
​
# the operator will always be at the beginning of the expression 
example = '[|, 1, 0, 1, 1, 0]'
​
# does order of the operands matter? 
# pattern: taking a bunch of operands and returning a single value 
# reduction 
​
from functools import reduce 
​
def evaluate_circuit_expression(expr):
  # split up the input string into an array of individual characters 
  chars = expr.split(', ')
  # manually get rid of the brackets at the ends of the input 
  operator = chars[0][1]
  operands = []
  answer = 0
​
  # loop, skipping the first element
  for c in chars[1:]:
    operands.append(c) 
  
  # handle the last operand specifically, get rid of the `]`
  operands[-1] = operands[-1][0] 
  
  # use a switch/if statement where each branch handles an operator 
  if operator == '&': 
    # perform the AND operation 
    # act on all of the elements in the operands array 
    answer = reduce(lambda a, b: a and b, operands)
​
  if operator == '|':
    # perform the OR operation
    answer = reduce(lambda a, b: a or b, operands)
    
  if operator == '!':
    # perform the NOT operation 
    # want this to return 0 or 1 
    answer = 1 if not operands[0] else 0
    
  return answer
​
# another function to handle all of the operator cases 
print(evaluate_circuit_expression(example))