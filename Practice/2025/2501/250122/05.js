document.querySelector(`#submit`).addEventListener(`click`, (event) => {
    // 入力フィールドの値を取得
    const phoneNumber = document.querySelector(`#phoneNumberText`).value;

    // ハイフンを削除
    const trimmedPhoneNumber = phoneNumber.replace(/-/g, '');

    // 結果を表示
    alert(`電話番号は ${trimmedPhoneNumber} です(*´ω｀*)`);

    // デフォルトの送信動作を無効化
    event.preventDefault();
});
