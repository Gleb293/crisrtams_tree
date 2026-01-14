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
        image: "./images/5309.png" 
    },
    { 
        name: "Синяя игрушка с цветком", 
        color: "blue", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5307.png" 
    },
    { 
        name: "Черная игрушка с цветком", 
        color: "black", 
        count: 5, 
        year: 2023 , 
        shape: "ball", 
        favorite: true, 
        image: "./images/5298.png" 
    },{
    name: "Желтая игрушка с цветком",
    color: "red", 
    count: 5, 
    year: 2023, 
    shape: "ball", 
    favorite: true,
    image: "./images/5299.png" 
   },
{ 
   name: "Красная игрушка с цветком", 
   color: "red", 
   count: 5, 
   year: 2023 ,
   shape: "ball", 
   favorite: true, 
   image: "./images/5301.png" 
},
{ 
   name: "Синяя игрушка с цветком", 
   color: "blue", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5302.png" 
},
{ 
   name: "Черная игрушка с цветком", 
   color: "black", 
   count: 5, 
   year: 2023 , 
   shape: "ball", 
   favorite: true, 
   image: "./images/5308.png" 
},
{ 
   name: "Желтая игрушка с цветком",
    color: "red", 
    // count: 5, 
    year: 2023, 
    shape: "ball", 
    favorite: true,
    image: "./images/5303.png" 
   },
{ 
   name: "Красная игрушка с цветком", 
   color: "red", 
  //  count: 5, 
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
   image: "./images/5296.png" 
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

// const speakerBtn = document.getElementById("speaker-btn");
// const audio = document.getElementById("xmas-audio");

// let musicOn = false;

// speakerBtn.addEventListener("click", () => {
//   if (!musicOn) {
//     audio.play();
//     musicOn = true;
//     speakerBtn.classList.add("sound-on");
//   } else {
//     audio.pause();
//     musicOn = false;
//     speakerBtn.classList.remove("sound-on");
//   }
// });

let treeData = {
  type:currentTree.type,
  garland:currentTree.garland,
  toys:currentTree.toys
};

function getResultCurrentTreeData(){
  const getResultCurrentTreeData={
    type:currentTree.type,
    garland:currentTree.garland,
    toys:currentTree.toys.map(toy=>({
      id:toy.id,
      x:toy.x,
      y:toy.y,
      image:toy.image
    }))
  };
  return ResultCurrentTreeData;
}

const saveTreeBtn=document.getElementById("save-tree-btn");
saveTreeBtn.addEventListener("click",()=>{
  const ResultCurrentTreeData=getResultCurrentTreeData();
  console.log(ResultCurrentTreeData);

  const ResultCurrentTreeJSON=JSON.stringify(ResultCurrentTreeData);
  console.log(ResultCurrentTreeJSON);
});


fetch("/data")
.then(response=>response.json())
.then(data=>console.log(data));


fetch("/data")
.then(response=>{
  if (!response.ok){
    throw new Error("ошибка сервера");
  }
  return response.json();
})
.then(data=>{
  console.log("данные получены",data);
});

saveTreeBtn.addEventListener ("click", ()=>{
const ResultCurrentTreeData=getResultCurrentTreeData();
const ResultCurrentTreeJSON=JSON.stringify(ResultCurrentTreeData);

fetch("/save-tree",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:ResultCurrentTreeJSON
})
 .then(response=>{
  if(!response.ok){
    throw new Error("Ошибка при сохранении елки");
  }
  return response.json();
 })
.then(data=>{
  console.log("Ответ сервера",data);
  alert("Елка сохранена");
})
.catch (error=>{
  console.log("Не удалось сохранить елку");
});

});
/*
setTimeout(()=>{
  console.log("privet");
},2000);

setTimeout(()=>{
  console.log("loading...");
},5000);

const name="alex";
setTimeout(()=>{
  console.log("privet "+name);
},1000);

function sayhello(){
  console.log("hello");
}
setTimeout(sayhello,1500)

let timerid =setTimeout(()=>alert("nothing"),1000);
alert(timerid);
clearTimeout(timerid);
alert(timerid);

setInterval(()=>{
  console.log("proshla 1 sek");
},1000);

setInterval(()=>{
  console.log("tik");
},3000);

const timeoutid =setTimeout(()=>{
  console.log("boom");
},5000);
clearTimeout(timeoutid);

let count=1;
setInterval(() => {
  console.log(count);
  
}, );


const timeout=setTimeout(()=>{
  console.log("srabotel");
},5000);
setTimeout(()=>{
  clearTimeout(timeout);
  console.log("otmene");
},2000);

const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
  setTimeout(()=>{
    alert("gotovo");

  },2000);
});


setTimeout(()=>{
  alert("1");
},1000);
setTimeout(()=>{
  alert("2");
},2000);
setTimeout(()=>{
  alert("3");
},3000);
setTimeout(()=>{
  alert("4");
},4000);
setTimeout(()=>{
  alert("5");
},5000);
setTimeout(()=>{
  alert("strart");
},6000);
*/

let time=5;
const id=setInterval(()=>{
  console.log(time);
  time--;
  if(time===0){
    console.log("start!");
    clearInterval(id);
  }
},1000);

























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































