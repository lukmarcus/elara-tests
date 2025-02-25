export const level05Start = `// This code tries to move the rover to the goal, but
// there's a locked gate blocking the way. Try pressing the
// button first to unlock the gate.
//
// CHANGE THE CODE BELOW:
move_forward(4);`;

export const level05Solution = `// This code tries to move the rover to the goal, but
// there's a locked gate blocking the way. Try pressing the
// button first to unlock the gate.
//
// CHANGE THE CODE BELOW:
turn_right();
move_forward(3);
press_button();
move_backward(3);
turn_left();
move_forward(4);`;
