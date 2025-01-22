// 矩形要素を取得
const rectangle = document.querySelector(`.rectangle`);

// ボタン要素を取得してクリックイベントを追加
document.querySelector(`.button`).addEventListener(`click`, onClickButton);

// ボタンがクリックされたときに実行される関数
function onClickButton() {
    // ランダムな色相（0～359）を生成
    const randomHue = Math.trunc(Math.random() * 360);

    // グラデーションの開始色を生成
    const randomColorStart = `hsl(${randomHue}, 100%, 50%)`;

    // グラデーションの終了色を生成（色相を40度ずらす）
    const randomColorEnd = `hsl(${(randomHue + 40) % 360}, 100%, 50%)`;

    // CSS変数に新しい色を設定
    rectangle.style.setProperty(`--start`, randomColorStart);
    rectangle.style.setProperty(`--end`, randomColorEnd);
}
