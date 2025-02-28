export const level17Start = `// This function "turns right" by turning left three times.
fn three_lefts() {
  // ADD YOUR CODE HERE
  
}

// Using the three_lefts function, this code will move
// the rover all the way to the goal! If you did it right,
// you DON'T need to change the following code.
move_backward(4);
three_lefts();
move_backward(4);
three_lefts();
move_backward(3);
three_lefts();
move_backward(2);
three_lefts();
move_backward(1);`;

export const level17Solution = `// This function "turns right" by turning left three times.
fn three_lefts() {
  // ADD YOUR CODE HERE
  turn_left();
  turn_left();
  turn_left();
}

// Using the three_lefts function, this code will move
// the rover all the way to the goal! If you did it right,
// you DON'T need to change the following code.
move_backward(4);
three_lefts();
move_backward(4);
three_lefts();
move_backward(3);
three_lefts();
move_backward(2);
three_lefts();
move_backward(1);`;
