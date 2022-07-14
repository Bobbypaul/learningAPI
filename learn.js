const text = document.getElementById("space");
const butt = document.getElementById("button");
const cat = document.querySelector("h1");

async function start() {
  const response = await fetch("https://asli-fun-fact-api.herokuapp.com/");
  const dataHere = await response.json();
  insertText(dataHere.data.fact, dataHere.data.cat);
}
start();
function insertText(factos, cate) {
  text.innerText = `${factos}`;
  cat.innerText = `${cate.toUpperCase()}`;
}
butt.addEventListener("click", function () {
  window.location.reload();
});
