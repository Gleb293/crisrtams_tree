/*let empty =[];
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
*/
let toys = [
    { 
        name: "Желтая игрушка с цветком",
         color: "red", 
         count: 5, 
         year: 2023, 
         shape: "ball", 
         favorite: true,
         image: "./images/5294.png" 
        },
    { 
        name: "Красная игрушка с цветком", 
        color: "red", 
        count: 5, 
        year: 2023 ,
        shape: "ball", 
        favorite: true, 
        image: "./images/5306.png" 
    },
    { 
        name: "Синяя игрушка с цветком", 
        color: "blue", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5300.png" 
    },
    { 
        name: "Черная игрушка с цветком", 
        color: "black", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5305.png" 
    },
    { 
        name: "Желтая игрушка с цветком",
         color: "red", 
         count: 5, 
         year: 2023, 
         shape: "ball", 
         favorite: true,
         image: "./images/5297.png" 
        },
    { 
        name: "Красная игрушка с цветком", 
        color: "red", 
        count: 5, 
        year: 2023 ,
        shape: "ball", 
        favorite: true, 
        image: "./images/5297.png" 
    },
    { 
        name: "Синяя игрушка с цветком", 
        color: "blue", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5300.png" 
    },
    { 
        name: "Черная игрушка с цветком", 
        color: "black", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5305.png" 
    },{
    name: "Желтая игрушка с цветком",
    color: "red", 
    count: 5, 
    year: 2023, 
    shape: "ball", 
    favorite: true,
    image: "./images/5294.png" 
   },
{ 
   name: "Красная игрушка с цветком", 
   color: "red", 
   count: 5, 
   year: 2023 ,
   shape: "ball", 
   favorite: true, 
   image: "./images/5306.png" 
},
{ 
   name: "Синяя игрушка с цветком", 
   color: "blue", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5300.png" 
},
{ 
   name: "Черная игрушка с цветком", 
   color: "black", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5305.png" 
},
{ 
   name: "Желтая игрушка с цветком",
    color: "red", 
    count: 5, 
    year: 2023, 
    shape: "ball", 
    favorite: true,
    image: "./images/5297.png" 
   },
{ 
   name: "Красная игрушка с цветком", 
   color: "red", 
   count: 5, 
   year: 2023 ,
   shape: "ball", 
   favorite: true, 
   image: "./images/5297.png" 
},
{ 
   name: "Синяя игрушка с цветком", 
   color: "blue", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5300.png" 
},
{ 
   name: "Черная игрушка с цветком", 
   color: "black", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5305.png" 
},
];

let currentTree = {
    type: "",
    garland: "",
    toys: [],
  
    setTree(newType) {
      this.type = newType;
    },
  
    setGarland(newGarland) {
      this.garland = newGarland;
    },

    addToy(toyObj) {
      this.toys.push(toyObj);
    },
  
    showInfo() {
      console.log("Ёлка:", this.type);
      console.log("Гирлянда:", this.garland);
      console.log("Игрушки:", this.toys);
    }
};


const toysGrid =document.querySelector(".toys-grid");

toys.forEach((toy,index)=>{
    const toyBox=document.createElement("div");

    const img=document.createElement("img");

    img.src=toy.image;
    img.classList.add("toy");
    img.draggable=true;
    img.dataset.index=index;

    const countBox=document.createElement("div");
    countBox.textContent=toy.count;
    countBox.style.color="white";
    countBox.style.textAlign="center";
    countBox.style.fontSize="14px";

    toyBox.appendChild(img);
    toyBox.appendChild(countBox);
    toysGrid.appendChild(toyBox);

    img.addEventListener("dragstart",e=>{
        if(toy.count===0){
            e.preventDefault();
            return;
        }
        e.dataTransfer.setData("toy",index);
    }
    );

});


let placedCounter = 0;

const treeArea = document.querySelector(".tree-area");

treeArea.addEventListener("dragover", e => e.preventDefault());

treeArea.addEventListener("drop", e => {
  e.preventDefault();

  const rect = treeArea.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  if (e.dataTransfer.getData("toy") !== "") {
    const toyIndex = e.dataTransfer.getData("toy");
    const toy = toys[toyIndex];

    if (toy.count > 0) {
      toy.count--;

      const xPos = x - 40;
      const yPos = y - 40;

      placedCounter++;
      const placedId = placedCounter;

      const img = document.createElement("img");
      img.src = toy.image;
      img.classList.add("toy-on-tree");

      img.style.left = xPos + "px";
      img.style.top = yPos + "px";

      // сохраняем id в DOM
      img.dataset.placedId = placedId;

      treeArea.appendChild(img);

      // сохраняем в объект текущей ёлки
      currentTree.addToy({
        id: toy.id,
        placedId: placedId,
        x: xPos,
        y: yPos,
        image: toy.image
      });
      console.log('currentTree.toys:', currentTree.toys);
      

      toysGrid.children[toyIndex].children[1].textContent = toy.count;

      img.addEventListener("click", () => {
        console.log("Клик по игрушке", img.dataset.placedId);

        img.remove();

        toy.count++;
        toysGrid.children[toyIndex].children[1].textContent = toy.count;

        currentTree.toys = currentTree.toys.filter(
          t => t.placedId != img.dataset.placedId // удалить игрушку
        );
      });
    }
  }

  if (e.dataTransfer.getData("garland") !== "") {
    const gIndex = e.dataTransfer.getData("garland");
    const garland = garlands[gIndex];

    currentTree.setGarland(garland.type);

    const img = document.createElement("img");
    img.src = garland.image;
    img.classList.add("garland-on-tree");

    img.style.left = (x - 140) + "px";
    img.style.top = (y - 20) + "px";

    img.style.animationDelay = (Math.random() * 1.6) + "s";

    treeArea.appendChild(img);
    
    //при клике на гирлянду удаляем ее из DOM
     img.addEventListener("click", () => {
      img.remove();
      // удаляем гирлянду из объекта текущей ёлки
      currentTree.setGarland("");
    });
  }
});































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































