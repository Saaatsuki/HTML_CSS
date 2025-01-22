// ユーザーの名前を保存し、挨拶を表示する
const loginForm = document.querySelector('#login-form');
const greeting = document.querySelector('#greeting');
const clock = document.querySelector('#clock');

// ログインフォームが送信された時の処理
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // フォームの送信を防ぐ
    const userName = loginForm.querySelector('input[type="text"]').value;
    localStorage.setItem('username', userName); // ユーザー名を保存
    showGreeting(userName); // 挨拶を表示
});

// 挨拶を表示する関数
function showGreeting(name) {
    greeting.textContent = `Hello, ${name}!`;
    greeting.classList.remove('hidden'); // 挨拶を表示
    loginForm.classList.add('hidden'); // フォームを非表示
}

// 保存されているユーザー名を取得して挨拶を表示
const savedName = localStorage.getItem('username');
if (savedName) {
    showGreeting(savedName);
}
