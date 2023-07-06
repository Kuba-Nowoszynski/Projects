const _btn = document.getElementById("btn");
const color_span = document.querySelector(".color");

_btn.addEventListener("click", function () {
  change();
});

const change = function () {
  const random = () => Math.floor(Math.random() * 256);
  const [r, g, b] = [random(), random(), random()];
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
  color_span.style.color = `rgb(${r},${g},${b})`;
  color_span.style.textShadow = "none";
  color_span.innerText = `RGB (${r},${g},${b})`;
};
