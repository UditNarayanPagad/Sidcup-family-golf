let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".blurCursor");
document.addEventListener("mousemove", (details) => {
  cursor.style.left = details.x + "px";
  cursor.style.top = details.y + "px";
  blur.style.left = details.x - 100 + "px";
  blur.style.top = details.y - 100 + "px";
});

let h4all = document.querySelectorAll(".nav h4");
h4all.forEach((h4) => {
  h4.addEventListener("mouseenter", (h4) => {
    cursor.style.scale = 3;
    cursor.style.border = "1px solid white";
    cursor.style.backgroundColor = "transparent";
  });
  h4.addEventListener("mouseout", (h4) => {
    cursor.style.scale = 1;
    cursor.style.border = "0px solid #95C11E";
    cursor.style.backgroundColor = "#95C11E";
  });
});

gsap.to(".nav", {
  backgroundColor: "black",
  height: "100px",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -5%",
    end: "top -10%",
    scrub: 1,
  },
});
gsap.to(".main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -25%",
    end: "top -100%",
    scrub: 1,
  },
});
gsap.from(".aboutUs img , .about", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".aboutUs",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    scrub: 2,
  },
});
gsap.from(".cards", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    start: "top 70%",
    end: "top 55%",
    scrub: 2,
  },
});
gsap.from("#h1Big", {
  y: 90,
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#h1Big",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2,
  },
});
gsap.from("#colon1", {
  x: -100,
  y: -100,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 4,
  },
});
gsap.from("#colon2", {
  x: 100,
  y: 100,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 4,
  },
});
let h1 = document.querySelector("#h1Big");
h1.addEventListener("mouseover", () => {
  cursor.style.scale = 3;
  cursor.style.border = "1px solid white";
  cursor.style.backgroundColor = "transparent";
});
h1.addEventListener("mouseout", (last) => {
  cursor.style.scale = 1;
  cursor.style.border = "0px solid #95C11E";
  cursor.style.backgroundColor = "#95C11E";
});
