const clock = document.querySelector('h2#clock');

function updateClock() {
    const date = new Date(); // 現在の日時を取得
    const hours = String(date.getHours()).padStart(2, '0'); // 時間（2桁）
    const minutes = String(date.getMinutes()).padStart(2, '0'); // 分（2桁）
    const seconds = String(date.getSeconds()).padStart(2, '0'); // 秒（2桁）

    // 現在時刻をフォーマットして画面に表示
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 1秒ごとに `updateClock` を実行
setInterval(updateClock, 1000);

// ページが読み込まれた瞬間に一度表示を更新
updateClock();
