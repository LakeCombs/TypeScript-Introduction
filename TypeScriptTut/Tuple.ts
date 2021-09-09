//typles
let arr = ["ary", 44, true];
arr[0] = false;
arr[1] = "cami";
arr = [3, true, "ruli"];

//for tuple we define the positin of each data type and it can't be change
let tup: [string, number, boolean] = ["rumilo", 55, true];
tup[0] = "lake";
tup[1] = 555;
tup[2] = false;

//but
// tup[0] = 44 will not working because we hava already declear the data type that should be in that position

let student: [string, number];
student = ["kinla", 33334];
