// HTMLの読み込みが完了した後にJavaScriptコードを実行するように設定
document.addEventListener("DOMContentLoaded", () => {
    // div.hello内の最初のh1要素を取得する
    const title = document.querySelector("div.hello:first-of-type h1");

    // 要素が見つかった場合のみイベントリスナーを設定する
    if (title) {
        // 取得した要素をコンソールに表示
        console.log(title);

        // h1要素をクリックしたときにテキストの色を青に変更する関数
        function handleTitleClick() {
            title.style.color = "skyblue"; // テキストの色を青に変更
        }

        // マウスがh1要素の上に乗ったときにテキストを変更する関数
        function handleMouseEnter() {
            title.innerText = "Mouse is here !!"; // テキストを変更
        }

        // マウスがh1要素から離れたときにテキストを変更する関数
        function handleMouseLeave() {
            title.innerText = "Mouse is gone !!"; // テキストを変更
        }

        // クリック、マウスエンター、マウスリーブのイベントリスナーを追加
        title.addEventListener("click", handleTitleClick);       // クリックイベント
        title.addEventListener("mouseenter", handleMouseEnter); // マウスが要素上に入るイベント
        title.addEventListener("mouseleave", handleMouseLeave); // マウスが要素から出るイベント
    } else {
        // h1要素が見つからなかった場合のエラーメッセージを表示
        console.error("The target element was not found!"); // 要素が見つからない場合の警告
    }
});
