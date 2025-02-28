export const level19Start = `// There are two sets of telepads this time. Can you make
// it through on your own?`;

export const level19Solution = `// There are two sets of telepads this time. Can you make
// it through on your own?
move_forward(2);
say("I am facing " + get_orientation());
if get_orientation() == "up" {
  turn_right();
  move_forward(2);
}
if get_orientation() == "right" {
  move_forward(2);
}
if get_orientation() == "down" {
  turn_left();
  move_forward(2);
}
if get_orientation() == "left" {
  move_backward(2);
}
say("I am facing " + get_orientation());
if get_orientation() == "up" {
  turn_left();
  move_forward(2);
}
if get_orientation() == "right" {
  move_backward(2);
}
if get_orientation() == "down" {
  turn_right();
  move_forward(2);
}
if get_orientation() == "left" {
  move_forward(2);
}`;
