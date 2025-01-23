const userDataList = [
    { id: 105, name: "橋本 環奈" },
    { id: 103, name: "浜辺 美波" },
    { id: 104, name: "山本 舞香" },
    { id: 102, name: "出口 夏希" },
    { id: 107, name: "石神 国子" },
    { id: 101, name: "大石 鈴華" },
    { id: 106, name: "桐谷 美玲" },
    { id: 108, name: "白石 麻衣" },
];

// リストをHTMLに反映する関数
function updateList() {
    let listHtml = "";

    // userDataListをループしてHTMLリストを作成
    for (const data of userDataList) {
        listHtml += `<li>${data.id} : ${data.name}</li>`;
    }

    // IDが"user_list"の要素にHTMLを挿入
    document.querySelector("#user_list").innerHTML = listHtml;
}

// 昇順にソートする関数
function sortUp() {
    // IDを昇順でソート
    userDataList.sort((a, b) => a.id - b.id);
    updateList(); // ソート後にリストを更新
}

// 降順にソートする関数
function sortDown() {
    // IDを降順でソート
    userDataList.sort((a, b) => b.id - a.id);
    updateList(); // ソート後にリストを更新
}

// 初期リストを表示
updateList();

// ボタンのクリックイベントを設定
document.querySelector(".up").addEventListener("click", sortUp);
document.querySelector(".down").addEventListener("click", sortDown);
