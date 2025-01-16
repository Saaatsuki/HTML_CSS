window.console.log();

window.alert();

window.document

// メッセージをコンソールに表示
window.console.log("こんにちは！これはコンソールに表示されます。");

// 数値や変数も表示できる
let num = 10;
window.console.log("変数の値は:", num);  // 変数 num の値が表示されます


// アラートメッセージを表示
window.alert("こんにちは！これはアラートメッセージです。");

// ページ内のid="demo"の要素を取得して、その内容を変更
window.document.getElementById("demo").innerText = "新しいテキストに変更！";

// ボタンがクリックされた時にアラートを表示
window.document.getElementById("myButton").addEventListener("click", function() {
  window.alert("ボタンがクリックされました！");
});
