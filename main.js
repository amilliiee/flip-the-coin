const btn = document.getElementById('flip-btn');
const coinBtn = document.getElementById('coin-btn');
const result = document.getElementById('result');
const coin = document.getElementById('coin');

btn.addEventListener("click", () => {
  const rslt = Math.random() < 0.5 ? "Heads" : "Tails";

  coin.src = rslt === "Heads" ? "./resources/heads.svg" : "./resources/tails.svg";
  result.textContent = rslt;
});

coinBtn.addEventListener("click", () => {
  const rslt = Math.random() < 0.5 ? "Heads" : "Tails";

  coin.src = rslt === "Heads" ? "./resources/heads.svg" : "./resources/tails.svg";
  coin.alt = rslt === "Heads" ? "Coin head" : "Coin tail";
  result.textContent = rslt;
});