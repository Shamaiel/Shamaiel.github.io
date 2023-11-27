//? <!----------------------------------------------- < Preloader & Progressbar> ----------------------------------------------->
let loader = document.getElementById("loader")
let brandbg = document.getElementById("brandbg");
brandbg.innerHTML = `<span class="spinner-grow text-primary" role="status"></span>
Shamaiel`;
let gitloadercal = document.getElementById("gitcalendar");
window.addEventListener("load", function () {
  brandbg.innerHTML = `< Shamaiel/>`;
  GitHubCalendar(".calendar", "shamaiel", { responsive: true });
});

function TopButtonFunction() {
  if (!topbutton) return;
  if (document.documentElement.scrollTop > 60) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}
let topbutton = document.getElementById("topbutton");
topbutton.addEventListener("click", () => (document.documentElement.scrollTop = 0));

const filled = document.querySelector(".filled");
function update() {
  filled.style.width = `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%`;
  requestAnimationFrame(update);
}

update();
//? <!----------------------------------------------- < Scroll slide animations> ----------------------------------------------->
let ScreenSize = window.innerWidth
window.onresize = () => {
  ScreenSize = window.innerWidth
  console.log(ScreenSize);
}

let aboutroll = document.getElementById("Aboutroll");
let projectroll = document.getElementById("projectHead");
window.addEventListener("scroll", () => {
  TopButtonFunction();
  let value = window.scrollY;
  if (ScreenSize <= 1400) value += 300
  aboutroll.style.transform = `translateX(${(value - 2350) / 3}px)`;
  projectroll.style.transform = `translateX(${(-value + 2700) / 3}px)`;
});

//? <!----------------------------------------------- < Resume> ----------------------------------------------->

function resume() {
  window.open("https://drive.google.com/file/d/1ALEkQ9gHznnnaBK3KwoNXpZgA6tvXR69/view?usp=drive_link", "_blank")
}
brandbg.addEventListener("click", (e) => {
  console.log(e);
});