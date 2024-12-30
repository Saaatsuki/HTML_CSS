// 時計を更新する関数
function updateClock() {
    // 現在の時刻を取得
    const now = new Date();

    // デジタル時計の表示を更新
    // 時間、分、秒を2桁に揃えて取得
    const hours = String(now.getHours()).padStart(2, '0'); // 時間（例: 08, 19）
    const minutes = String(now.getMinutes()).padStart(2, '0'); // 分（例: 05, 45）
    const seconds = String(now.getSeconds()).padStart(2, '0'); // 秒（例: 09, 30）
    const clockElement = document.getElementById('clock'); // デジタル時計の要素を取得
    clockElement.textContent = `${hours}:${minutes}:${seconds}`; // デジタル時計に現在時刻を表示

    // アナログ時計の針の角度を計算
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 時針の角度: 1時間=30度 + 1分で0.5度動く
    const minuteAngle = minutes * 6 + seconds * 0.1;    // 分針の角度: 1分=6度 + 1秒で0.1度動く
    const secondAngle = seconds * 6;                   // 秒針の角度: 1秒=6度

    // アナログ時計の針を動かす
    document.querySelector('.lineHour').style.transform = `rotate(${hourAngle}deg)`; // 時針の回転
    document.querySelector('.lineMin').style.transform = `rotate(${minuteAngle}deg)`; // 分針の回転
    document.querySelector('.lineSec').style.transform = `rotate(${secondAngle}deg)`; // 秒針の回転
}

// 1秒ごとに時計を更新するように設定
setInterval(updateClock, 1000);

// ページが読み込まれたらすぐに時計を表示
updateClock();
