export const level14Start = `// This code reads the safe direction from the data point
// (either "left" or "right") and stores it in a variable
// called safe_direction. You DON'T need to change this part.
move_forward(2);
let safe_direction = read_data();
say("The safe direction is: " + safe_direction);

if safe_direction == "left" {
  // If the safe direction is "left", we should go left.
  turn_left();
  move_forward(3);
}
if safe_direction == "right" {
  // What should we do if the safe direction is "right"?
  // ADD YOUR CODE BELOW
  
  
}`;

export const level14Solution = `// This code reads the safe direction from the data point
// (either "left" or "right") and stores it in a variable
// called safe_direction. You DON'T need to change this part.
move_forward(2);
let safe_direction = read_data();
say("The safe direction is: " + safe_direction);

if safe_direction == "left" {
  // If the safe direction is "left", we should go left.
  turn_left();
  move_forward(3);
}
if safe_direction == "right" {
  // What should we do if the safe direction is "right"?
  // ADD YOUR CODE BELOW
  turn_right();
  move_forward(3);
}`;
