export const level20Start = `// This function uses a while loop to make G.R.O.V.E.R. face
// up no matter which orientation he starts in.
// You DON'T need to change this part.
fn face_up() {
  while get_orientation() != "up" {
    turn_left();
  }
}

// You can use the face_up function after G.R.O.V.E.R. goes
// through a telepad. Here's an example to help you get started:
move_forward(2);
face_up();
move_forward(3);
// ADD YOUR CODE BELOW:`;

export const level20Solution = `// This function uses a while loop to make G.R.O.V.E.R. face
// up no matter which orientation he starts in.
// You DON'T need to change this part.
fn face_up() {
  while get_orientation() != "up" {
    turn_left();
  }
}

// You can use the face_up function after G.R.O.V.E.R. goes
// through a telepad. Here's an example to help you get started:
move_forward(2);
face_up();
move_forward(3);
// ADD YOUR CODE BELOW:
face_up();
move_forward(4);
face_up();
move_forward(5);`;
