export const level25Start = `// The data point will output "right" or "left" depending on which
// direction is safe from falling asteroids. However, it can't detect
// malfunctioning rovers. You'll need to avoid those on your own!`;

export const level25Solution = `// The data point will output "right" or "left" depending on which
// direction is safe from falling asteroids. However, it can't detect
// malfunctioning rovers. You'll need to avoid those on your own!
let direction = read_data();
if direction == "right" {
  move_forward(6);
  turn_right();
  move_forward(6);
  turn_right();
  move_forward(6);
  turn_right();
  move_forward(4);
}
if direction == "left" {
  move_forward(6);
  turn_left();
  move_forward(5);
  turn_left();
  move_forward(6);
  turn_left();
  move_forward(3);
}`;
