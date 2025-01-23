// 表示する画像のファイル名をリストで用意
const images = ["kogi1.png", "kogi2.png", "kogi3.png"];

// images配列の中からランダムに1つ選択
const chosenImage = images[Math.floor(Math.random() * images.length)];

// <img>要素を作成
const bgImage = document.createElement("img");

// 作成した<img>要素に選ばれた画像ファイルを設定
bgImage.src = `C:/Users/USER/HTML_CSS/Practice/2025/2501/250123/nico/js/${chosenImage}`;

// <body>に作成した<img>要素を追加して表示
document.body.appendChild(bgImage);
