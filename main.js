let darkBtn = document.querySelector("#dark-btn");

darkBtn.addEventListener("click", () => {
  //  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
  document.body.style.backgroundImage = "url(./image/night.jpg)";
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundPosition = "center";
});

let lightBtn = document.querySelector("#light-btn");

lightBtn.addEventListener("click", () => {
  // document.body.style.backgroundColor = "white";
  // document.body.style.color = "black";
  document.body.style.backgroundImage = "url(./image/c5.jpg)";
  document.body.style.backgroundSize = "cover"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundPosition = "center";
});