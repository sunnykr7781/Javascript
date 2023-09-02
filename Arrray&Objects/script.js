var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// how to use / access
arr[0]; // arr[index]

// to remove a value from last in array
arr.pop(); // now arr = [1,2,3,4,5,6,7,8]

// to add a value to last
arr.push(10); // now arr = [1,2,3,4,5,6,7,8,10]

// to remove a value from any index
arr.splice(4, 1); // arr.splice(index, how many value to be removed)

// Objects => when we need to store about one element only we store
//  it in object in key: value pair in curlybraces({ })

var student = {
  name: "aditya",
  rollno: 34,
  emailid: "aditya11@gmail.com",
};

// to access it
student.name; // name of the objectvariable.key
//anything that comes before a dot in js is a object

var a = {
  b: {
    c: {
      d: 123,
    },
  },
};
a.b.c.d; // to access the value of d we put . it means we goes inside an
//  object a. means we ar inside the a thats why we done c.d it means we are
//   inside c and asking the value of d
