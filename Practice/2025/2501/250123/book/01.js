// ユーザーリスト（userlist）は配列内にオブジェクトを持つ構造
const userlist = [
    { id: 1, name: "橋本 環奈", address: "福岡" },
    { id: 1, name: "浜辺 美波", address: "石川" },
    { id: 1, name: "山本 舞香", address: "鳥取" },
];

// `.container`クラスを持つ要素を取得
const container = document.querySelector(".container");

// 各ユーザーの情報をループ処理で取得し、HTMLを生成して追加
userlist.forEach((userData) => {
    // `innerHTML`でHTMLのカードを動的に生成し、コンテナに追加
    container.innerHTML += `
        <div class="card">
            <h2>${userData.name}</h2>
            <p>出身地 : ${userData.address}</p>
        </div>
    `;
});
