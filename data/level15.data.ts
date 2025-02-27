export const level15Start = `// You'll need to read the safe direction from the data point
// (either "top", "middle", or "bottom") and then move the rover
// to the corresponding goal.
//
// ADD YOUR CODE BELOW`;

export const level15Solution = `// You'll need to read the safe direction from the data point
// (either "top", "middle", or "bottom") and then move the rover
// to the corresponding goal.
//
// ADD YOUR CODE BELOW
let safe_direction = read_data();
say("The safe direction is: " + safe_direction);
move_forward(3);
if safe_direction == "top" {
  turn_left();
  move_forward(3);
}
if safe_direction == "middle" {
  move_forward(3);
}
if safe_direction == "bottom" {
  turn_right();
  move_forward(3);
}`;
