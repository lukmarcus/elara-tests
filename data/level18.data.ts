export const level18Start = `// This code uses the get_orientation function to figure out which
// way the rover is facing. You DON'T need to change this part.
move_forward(3);
say("I am facing " + get_orientation());

// If the rover is facing up, turn to the right and then move
// forward. You DON'T need to change this part.
if get_orientation() == "up" {
  turn_right();
  move_forward(3);
}

// Add more if statements to handle the other possible orientations.
// ADD YOUR CODE BELOW`;

export const level18Solution = `// This code uses the get_orientation function to figure out which
// way the rover is facing. You DON'T need to change this part.
move_forward(3);
say("I am facing " + get_orientation());

// If the rover is facing up, turn to the right and then move
// forward. You DON'T need to change this part.
if get_orientation() == "up" {
  turn_right();
  move_forward(3);
}

// Add more if statements to handle the other possible orientations.
// ADD YOUR CODE BELOW
if get_orientation() == "right" {
  move_forward(3);
}
if get_orientation() == "down" {
  turn_left();
  move_forward(3);
}
if get_orientation() == "left" {
  move_backward(3);
}`;
