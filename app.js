const addBtn = document.getElementsByClassName("add")[0];

const select = document.getElementsByClassName("select")[0];
const blur = document.getElementsByClassName("overlay")[0];
const submit = document.getElementsByClassName("submit")[0];

const close = document.getElementsByClassName("close")[0];

const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");

addBtn.addEventListener("click", () => {
  select.classList.toggle("hidden");
  blur.classList.toggle("hidden");
});

submit.addEventListener("click", () => {
  select.classList.toggle("hidden");
  blur.classList.toggle("hidden");

  const course1 = document.querySelector(".first_course select");
  const course2 = document.querySelector(".second_course select");

  const post = document.createElement("div");
  post.classList.add("post_style");

  const para = document.createElement("p");
  para.textContent =
    course1.value +
    " --- " +
    time1.value +
    " & " +
    course2.value +
    " --- " +
    time2.value;

  post.appendChild(para);

  const parent = document.querySelector(".post_body");
  parent.appendChild(post);
});

close.addEventListener("click", () => {
  select.classList.toggle("hidden");
  blur.classList.toggle("hidden");
});

