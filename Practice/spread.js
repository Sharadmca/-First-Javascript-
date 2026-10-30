let original=[10,20,30];
let copy=[...original];
copy.push(40);
console.log("original:",original);
console.log("Copy:",copy);

//merge two objects

let student={
  name:"Sharad"
  Course:"MCA"
};

let result={
  marks:85,
  grade:"A"
};

let details={...student, ...result};
console.log(details);