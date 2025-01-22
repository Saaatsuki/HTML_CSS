// 今日の日付を取得
const today = new Date();

// 月と日を取得して、正しいフォーマットに変換
const month = today.getMonth() + 1; // 月は+1が必要
const date = today.getDate();
const day = today.getDay();
const dayLi = ["日","月","火","水","木","金","土"];
// HTMLに日付と天気を挿入
document.querySelector(`#main`).innerHTML = `
    <h1>今日 (${month}月 ${date}日 ${dayLi[day]}曜日) の天気🌞</h1>
    <p>今日は晴れの予報です！☔</p>
`;
