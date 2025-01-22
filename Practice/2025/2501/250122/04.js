// 都道府県のボタンをすべて取得
const buttons = document.querySelectorAll("#prefecture-list button");

// 入力ボックスを取得
const searchInput = document.getElementById("search-word-input");

// 入力イベントをリッスン
searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.trim().toLowerCase();  // 入力された文字を小文字に変換して取得
    
    buttons.forEach(button => {
        const prefectureName = button.getAttribute("data-name").toLowerCase();  // 都道府県名を小文字に変換
        const phonetic = button.getAttribute("data-phonetic").toLowerCase();  // ふりがなを小文字に変換
        
        // 検索ワードが都道府県名またはふりがなに一致するか確認
        if (prefectureName.includes(searchTerm) || phonetic.includes(searchTerm)) {
            button.style.display = "block";  // 一致した場合はボタンを表示
        } else {
            button.style.display = "none";  // 一致しない場合はボタンを非表示
        }
    });
});
