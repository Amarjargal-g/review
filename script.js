let i = 0;

const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");
const randomBtn = document.getElementById("random");

const img = document.querySelector("#picture");

const nameList = document.querySelector(".name");
const profList = document.querySelector(".profession");
const descList = document.querySelector(".description");

const info = [
  {
    img: "./images/beans.jpeg",
    name: "Rowan Atkinson",
    profession: "Actor",
    description: "mr bean",
  },
  {
    img: "./images/bjordan.jpeg",
    name: "Michael B Jordan",
    profession: "Athlete",
    description: "He is an athlete turned into actor",
  },
  {
    img: "./images/dweyne.avif",
    name: "Dwayne Johnson",
    profession: "Actor",
    description: "Famous for being like a rock ",
  },
  {
    img: "./images/tony.jpeg",
    name: "Robert Downey JR",
    profession: "Actor",
    description: "Iron man ",
  },
  {
    img: "./images/will.jpeg",
    name: "Will Smith",
    profession: "Actor",
    description:
      "He has a crazy range when it comes to acting ,, he is also a rapper in 90s",
  },
];

const container = document.getElementById("infoBox");

const showInfo = (i) => {
  let items = info[i];
  img.src = items.img;
  nameList.textContent = items.name;
  profList.textContent = items.profession;
  descList.textContent = items.description;
};

rightBtn.addEventListener("click", () => {
  i++;

  if (i > info.length - 1) {
    i = 0;
  }
  showInfo(i);
});

leftBtn.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = info.length - 1;
  }

  showInfo(i);
});

randomBtn.addEventListener("click", () => {
  i = Math.floor(Math.random() * info.length);
  showInfo(i);
});
