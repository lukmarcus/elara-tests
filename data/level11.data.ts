export const level11Start = `// There are several gates ahead with the same password. Instead of
// typing this super long password over and over again, you can
// store it in a variable.
let password = "supercalifragilisticexpialidocious";

// Now you can use the variable instead of typing the password.
// ADD YOUR CODE BELOW`;

export const level11Solution = `// There are several gates ahead with the same password. Instead of
// typing this super long password over and over again, you can
// store it in a variable.
let password = "supercalifragilisticexpialidocious";

// Now you can use the variable instead of typing the password.
// ADD YOUR CODE BELOW
turn_right();
move_forward(3);
move_backward(3);
turn_left();
say(password);
move_forward(2);
say(password);
move_forward(5);
move_backward(3);
say(password);
turn_left();
move_forward(2);
move_backward(6);`;

export const level11Challenge = `// There are several gates ahead with the same password. Instead of
// typing this super long password over and over again, you can
// store it in a variable.
let password = "supercalifragilisticexpialidocious";

// Now you can use the variable instead of typing the password.
// ADD YOUR CODE BELOW
say(password);
move_forward(2);
say(password);
move_forward(2);
say(password);
turn_left();
move_forward(2);
move_backward(6);`;
