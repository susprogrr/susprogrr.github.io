let count = 0;

// SSR演出用のdivを追加
const effectDiv = document.createElement("div");
effectDiv.id = "effect";
document.body.appendChild(effectDiv);

document.getElementById("btn").addEventListener("click", () => {
  count++;

  document.getElementById("count").textContent = `回数: ${count}`;

  const messages = [
    "笑顔がすっごいかわいい",
    "甘えてくるときがめちゃかわいい",
    "一緒にいると安心する",
    "なんだかんだ頑張ってるのが好き",
    "優しいところが好き",
    "ときどきぽんこつかますの可愛い",
    "いっぱいほめてくれる"
  ];

  // ★ 1%の確率でSSR
  const isSSR = Math.random() < 0.01;

  if (isSSR) {
    showSSR();
    document.getElementById("message").textContent = "この世で一番大好きだよ";
    return;
  }

  // 通常ガチャ
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").textContent = messages[random];

  // ★ 回数による隠しメッセージ
  if (count === 30) {
    document.getElementById("message").textContent = "気に入ってくれてありがと";
  }
  if (count === 60) {
    document.getElementById("message").textContent = "60回ってすげー";
  }
  if (count === 90) {
    document.getElementById("message").textContent = "めっちゃ気に入ってくれてる";
  }
});

// ★ SSR演出（画面が虹色に光る）
function showSSR() {
  const effect = document.getElementById("effect");
  effect.style.opacity = 1;

  setTimeout(() => {
    effect.style.opacity = 0;
  }, 800);
}



