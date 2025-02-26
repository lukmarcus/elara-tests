export const level08Start = `// This time there is more than one crate in the way. The code
// below moves the first crate out of the way, but there is still
// one more to go!
move_forward(3);
turn_left();
pick_up();
turn_left();
move_forward(2);
drop();
// ADD YOUR CODE BELOW:`;

export const level08Solution = `// This time there is more than one crate in the way. The code
// below moves the first crate out of the way, but there is still
// one more to go!
move_forward(3);
turn_left();
pick_up();
turn_left();
move_forward(2);
drop();
// ADD YOUR CODE BELOW:
move_backward(2);
turn_right();
move_forward(1);
pick_up();
turn_right();
turn_right();
drop();
move_backward(2);
turn_right();
move_forward(3);`;

export const level08Challenge = `// This time there is more than one crate in the way. The code
// below moves the first crate out of the way, but there is still
// one more to go!
move_forward(3);
turn_left();
pick_up();
turn_left();
drop();
// ADD YOUR CODE BELOW:
turn_right();
move_forward(1);
pick_up();
move_forward(2);
turn_left();
move_forward(3);`;
