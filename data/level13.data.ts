export const level13Start = `// Yet another locked gate! Just like before, the password is
// stored in a data point. Can you get through on your own
// this time?
//
// ADD YOUR CODE BELOW`;

export const level13Solution = `// Yet another locked gate! Just like before, the password is
// stored in a data point. Can you get through on your own
// this time?
//
// ADD YOUR CODE BELOW
move_forward(1);
let password = read_data();
move_forward(1);
turn_left();
say(password);
move_forward(3);`;
