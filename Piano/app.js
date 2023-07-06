const pianoKeys = document.querySelectorAll(".key");

function playSound(num) {
  const reMap = [
    "9",
    "11",
    "14",
    "16",
    "18",
    "21",
    "23",
    "2",
    "4",
    "6",
    "8",
    "10",
    "12",
    "13",
    "15",
    "17",
    "19",
    "20",
    "22",
    "24",
    "1",
    "3",
    "5",
    "7",
  ];
  new Audio(`./piano-keys/key${reMap[num]}.mp3`).play();
}

pianoKeys.forEach(function (n, i) {
  n.addEventListener("click", function () {
    playSound(i);
  });
});
