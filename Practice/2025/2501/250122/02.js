const char = document.querySelector(`.char`);

let degree = 0;

// 無限ループ開始
loop();

function loop() {
    // 回転角度をラジアンに変換
    const rotation = (degree * Math.PI) / 180;

    // 中心座標と円周上の位置を計算
    const targetX = window.innerWidth / 2 + 100 * Math.cos(rotation) - 50;
    const targetY = window.innerHeight / 2 + 100 * Math.sin(rotation) - 50;

    // キャラクターの位置を設定
    char.style.left = `${targetX}px`;
    char.style.top = `${targetY}px`;

    // 角度を1度ずつ増やす
    degree += 3;

    // 次のフレームで再び loop を呼び出す
    requestAnimationFrame(loop);
}
