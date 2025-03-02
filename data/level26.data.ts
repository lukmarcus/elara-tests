export const level26Start = `// You can use this face_direction function to have G.R.O.V.E.R.
// face any direction you want! For example, to face up, you would
// call face_direction("up").
fn face_direction(direction) {
  while get_orientation() != direction {
    turn_left();
  }
}

// ADD YOUR CODE BELOW:`;

export const level26Solution = `// You can use this face_direction function to have G.R.O.V.E.R.
// face any direction you want! For example, to face up, you would
// call face_direction("up").
fn face_direction(direction) {
  while get_orientation() != direction {
    turn_left();
  }
}

// ADD YOUR CODE BELOW:
turn_left();
move_forward(4);
face_direction("right");
move_forward(1);
let password = read_data();
move_forward(10);
face_direction("up");
move_forward(1);
say(password);
move_forward(3);
press_button();
move_backward(3);
turn_left();
move_forward(6);
turn_right();
move_forward(4);
turn_right();
move_forward(1);`;
