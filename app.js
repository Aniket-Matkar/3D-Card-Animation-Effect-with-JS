
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const title = document.querySelector(".title");
const img = document.querySelector(".ninja img");
const like = document.querySelector(".like");
const description = document.querySelector(".info h3");
const Style = document.querySelector(".style");

//cursor outside
container.addEventListener("mousemove", (e) => {
  // let xAxis =  e.pageX / 55;
  // let yAxis =  e.pageY / 55;
  let xAxis = (window.innerWidth / 2 - e.clientX) / 25;
  let yAxis = (window.innerHeight / 2 - e.clientY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//cursor inside
container.addEventListener("mouseenter", (e) => {
  setTimeout(() => {
    card.style.transition = "all ease";
  }, 0.2);
  title.style.transform = "translateZ(150px)";
  img.style.transform = "translateZ(200px)";
  description.style.transform = "translateZ(130px)";
  Style.style.transform = "translateZ(100px)";
  like.style.transform = "translateZ(70px)";
});

//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = "translateZ(0px)";
  img.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  Style.style.transform = "translateZ(0px)";
  like.style.transform = "translateZ(0px)";
});