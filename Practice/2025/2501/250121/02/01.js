// 必要な要素を取得
const loginForm = document.querySelector("#login-form"); // ログインフォーム
const loginInput = loginForm.querySelector("input[type='text']"); // ユーザー名入力欄
const greeting = document.querySelector("#greeting"); // 挨拶メッセージ表示エリア

// クラス名を統一するための便利な変数
const HIDDEN_CLASSNAME = "hidden";

// ログイン処理
function onLoginSubmit(event) {
    event.preventDefault(); // フォームのデフォルト動作（ページリロード）を防止

    const username = loginInput.value; // ユーザーが入力した名前を取得
    loginForm.classList.add(HIDDEN_CLASSNAME); // フォームを非表示にする

    // 挨拶メッセージを表示
    greeting.textContent = `Hello, ${username}! (*´ω｀*)`; // 挨拶メッセージを設定
    greeting.classList.remove(HIDDEN_CLASSNAME); // 挨拶メッセージを表示
}

// フォームに "submit" イベントを登録
loginForm.addEventListener("submit", onLoginSubmit);
