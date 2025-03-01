export const level21Start = `turn_right();
move_forward(3);
// ADD CODE BELOW:`;

export const level21Solution = `turn_right();
move_forward(3);
// ADD CODE BELOW:
fn face_right() {
  while get_orientation() != "right" {
    turn_left();
  }
}
fn face_down() {
  while get_orientation() != "down" {
    turn_left();
  }
}
face_right();
move_forward(2);
press_button();
move_backward(1);
turn_right();
move_forward(3);
face_down();
move_forward(4);`;
