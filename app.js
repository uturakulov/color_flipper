const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.getElementById("text");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += colors[randomNumberAdd()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function randomNumberAdd() {
  return Math.floor(Math.random() * colors.length);
}
