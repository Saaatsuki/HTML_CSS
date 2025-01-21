// #login-form 内の <input> 要素を取得
const loginInput = document.querySelector("#login-form input");

// #login-form 内の <button> 要素を取得
const loginButton = document.querySelector("#login-form button");

// ボタンがクリックされたときの処理
function onLoginBtnClick() {
    const username = loginInput.value; // 入力された名前を取得

    // 入力が空の場合のアラート
    if (username === "") {
        alert("Please write your name");
    } 
    // 名前が15文字以上の場合のアラート
    else if (username.length >= 15) {
        alert("Your name is too long");
    }
}

// ボタンにクリックイベントを登録
loginButton.addEventListener("click", onLoginBtnClick);
