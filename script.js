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
    description:
      "Rowan Sebastian Atkinson (born 6 January 1955) is an English actor, comedian and writer. He first gained success on the sketch comedy show Not the Nine O'Clock News (1979–1982), before going on to play the title roles in the sitcoms Blackadder (1983–1989) and Mr.",
  },
  {
    img: "./images/bjordan.jpeg",
    name: "Michael B Jordan",
    profession: "Athlete",
    description:
      "Jordan (born February 9, 1987, Santa Ana, California, U.S.) is an American actor who parlayed a successful career on television into a series of high-profile movie roles, most notably in the Creed and Black Panther franchises.",
  },
  {
    img: "./images/dweyne.avif",
    name: "Dwayne Johnson",
    profession: "Actor",
    description:
      "Dwayne Johnson is an actor and former professional wrestler. After turning to wrestling in 1996, he quickly developed into a major star. In the twenty-first century, he increasingly focused on films, becoming one of the highest-grossing actors in the world.",
  },
  {
    img: "./images/tony.jpeg",
    name: "Robert Downey JR",
    profession: "Actor",
    description:
      "Robert John Downey Jr. (born April 4, 1965) is an American actor. Known for portraying charismatic and intelligent characters over a diverse range of films, he was the highest-paid actor in Hollywood annually from 2013 to 2015. ",
  },
  {
    img: "./images/will.jpeg",
    name: "Will Smith",
    profession: "Actor",
    description:
      "Will Smith (born September 25, 1968, Philadelphia, Pennsylvania, U.S.) is an American actor and musician whose charisma and quick wit helped him transition from rap music to a successful career in acting. Smith's notable films include the blockbusters Bad Boys (1995).",
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
