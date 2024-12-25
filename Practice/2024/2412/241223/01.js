// 現在時刻を取得して表示する関数
function updateClock() {
    const now = new Date(); // 現在時刻を取得
    const hours = String(now.getHours()).padStart(2, '0'); // 時間（2桁）
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 分（2桁）
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 秒（2桁）

    // 時刻を更新
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
}

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);

// ページが読み込まれたときにすぐに時刻を表示
updateClock();
