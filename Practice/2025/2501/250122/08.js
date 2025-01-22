// 秒数を表示する要素を取得
const secondElement = document.querySelector('.second');

// ゴール時間を現在の時間 + 15秒に設定
const goalTime = new Date().getTime() + 15 * 1000;

// タイマーの更新を開始
update();

function update() {
    // 現在の時間を取得
    const currentTime = new Date().getTime();

    // 残り時間を計算（ミリ秒単位）
    const leftTime = goalTime - currentTime;

    // 残り時間を秒単位に変換し、小数点第2位まで表示
    secondElement.innerText = Math.max((leftTime / 1000).toFixed(2), 0);

    // 残り時間が0以下であれば処理を終了
    if (leftTime > 0) {
        requestAnimationFrame(update); // 次のフレームで再実行
    } else {
        secondElement.innerText = "0.00"; // タイマーが終了した状態
    }
}
