function updateClock() {
    const now = new Date();

    // デジタル時計の更新
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    // アナログ時計の更新
    const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 1時間=30度 + 1分で0.5度
    const minuteAngle = minutes * 6 + seconds * 0.1;     // 1分=6度 + 1秒で0.1度
    const secondAngle = seconds * 6;                    // 1秒=6度

    document.querySelector('.lineHour').style.transform = `rotate(${hourAngle}deg)`;
    document.querySelector('.lineMin').style.transform = `rotate(${minuteAngle}deg)`;
    document.querySelector('.lineSec').style.transform = `rotate(${secondAngle}deg)`;
}

// 1秒ごとに時計を更新
setInterval(updateClock, 1000);

// 初回実行
updateClock();
