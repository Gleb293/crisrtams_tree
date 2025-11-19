let empty =[];
let num=[1,2,3];
let fruits=["яблоко"];
let films=["corol talsi","plan pobega","illusia obmana"];

function showFilms () {
    for (let film of films) {
    console.log(films);
}
}
showFilms();
let students=[
    {name:"Anna",age:15},
    {name:"Igor",age:16}
];
for (let stud of students){
    console.log(students.name);
}
let numbers=[1,2,3];
numbers.push(4);
console.log(numbers);
let games=["voleyball","football"];
games.push("basketball");
console.log(games);


let nums=[5,15,20];
let removed=nums.pop();
console.log(removed);

let n=[2,3];
n.unshift(1);
console.log(n);

let nn=[1,2,3];
let first=nn.shift();
console.log(nn);
console.log(first);

let colors=["red","green","blue"];
console.log(colors.indexOf(green));
console.log(colors.indexOf(black));


let nnn=[10,20,30,40];
let part=nnn.slice(1,3);
console.log(part);
console.log(nnn);


let nnnn=[10,20,30,40,50];
let remove=nnnn.slice(1,2);
console.log(nnnn);
console.log(remove);

let word=["hello","world"];
let mes=word.join(" ");
console.log(mes);

let nnnnn=[1,2,3];
nnnnn.reverse();
console.log(nnnnn);