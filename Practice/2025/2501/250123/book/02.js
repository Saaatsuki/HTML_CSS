const array = ["🍓 いちご", "🍊 みかん", "🍋 れもん" , "🍉 すいか"];

// IDを指定して要素を取得
const fruit = document.getElementById("fruit");

// 配列の各要素をループ処理
for (const value of array) {
    fruit.innerHTML += `
        <h2 class="fruit">${value}</h2>
    `;
}
