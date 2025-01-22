// .text クラスのテキストエリアを取得
const text = document.querySelector('.text');
// .str-num クラスの文字数表示部分を取得
const str_num = document.querySelector('.str-num');

// 入力があるたびに文字数を更新するため、inputイベントを監視
text.addEventListener('input', onInput);

// テキストエリアに入力された文字数を表示する関数
function onInput() {
    // テキストエリアに入力された文字を取得し、その長さ（文字数）を計算
    const inputText = text.value;
    
    // 文字数を表示部分に反映（表示を更新）
    str_num.innerText = inputText.length;
}
