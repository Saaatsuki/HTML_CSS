// 最初のdiv.hello内の最初のh1要素を取得
const h1 = document.querySelector("div.hello:first-child h1");

// タイトルがクリックされたときの処理
function handleTitleClick() {
    const currentColor = h1.style.color; // 現在の色を取得
    let newColor; // 新しい色を格納する変数

    // 現在の色が青ならトマト色に、それ以外なら青に変更
    if (currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }

    h1.style.color = newColor; // 新しい色を適用
}

// クリックイベントリスナーを追加
h1.addEventListener("click", handleTitleClick);
