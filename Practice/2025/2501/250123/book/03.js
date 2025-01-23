// 顧客データリスト
const cusList = [
    { id: 123, name: "橋本 環奈" },
    { id: 456, name: "浜辺 美波" },
    { id: 789, name: "山本 舞香" },
    { id: 101, name: "出口 夏希" },
];

// 入力フィールドと結果表示用の要素を取得
const searchIdInput = document.querySelector("#search-id-input");
const searchResult = document.querySelector("#search-result");

// 入力が変わるたびに検索を実行
searchIdInput.addEventListener("keyup", (event) => {
    const searchId = Number(event.target.value); // 入力値を数値に変換
    findUser(searchId); // 検索実行
});

// 顧客IDでユーザーを検索する関数
function findUser(searchId) {
    const targetData = cusList.find((data) => data.id === searchId); // ID一致を検索

    if (!targetData) {
        searchResult.textContent = "該当者無し"; // 見つからない場合
    } else {
        searchResult.textContent = `${targetData.name}`; // 見つかった場合
    }
}
