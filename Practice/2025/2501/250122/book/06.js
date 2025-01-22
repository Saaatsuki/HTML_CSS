const hashes = {};

// URLのクエリパラメータを取得
const parameters = location.search
    .split(/&|\?/) // '?'や'&'で分割
    .filter((value) => value.includes('=')); // '='を含むものだけを残す

// パラメータをオブジェクト形式に変換
parameters.forEach((param) => {
    const [key, value] = param.split('=');
    hashes[key] = decodeURIComponent(value); // デコードして格納
});

// クエリパラメータをテーブルに反映
document.querySelector('.id').textContent = hashes.id || '未入力';
document.querySelector('.name').textContent = hashes.name || '未入力';
document.querySelector('.age').textContent = hashes.age || '未入力';
