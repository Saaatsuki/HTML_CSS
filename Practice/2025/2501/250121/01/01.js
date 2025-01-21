// login-formのIDを持つ要素を取得し、loginFormという定数に格納
const loginForm = document.getElementById("login-form");

// loginForm内にある<input>要素を取得し、loginInputという定数に格納
const loginInput = loginForm.querySelector("#login-form input");

// loginForm内にある<button>要素を取得し、loginButtonという定数に格納
const loginButton = loginForm.querySelector("#login-form button");

// ボタンがクリックされた際に実行される関数を定義
function onLoginBtnClick() {
    // コンソールにメッセージを出力する処理
    console.log("Click!!(*´ω｀*)");
}

// loginButtonにクリックイベントリスナーを追加
// ボタンがクリックされると、onLoginBtnClick関数が呼び出される
loginButton.addEventListener("click", onLoginBtnClick);
