export const level24Start = `// Try using the telepad to get around the malfunctioning rover.`;

export const level24Solution = `// Try using the telepad to get around the malfunctioning rover.
fn face_up() {
  while get_orientation() != "up" {
    turn_left();
  }
}
move_forward(2);
turn_right();
move_forward(1);
face_up();
move_forward(3);
turn_right();
move_forward(7);
turn_right();
move_forward(3);`;
