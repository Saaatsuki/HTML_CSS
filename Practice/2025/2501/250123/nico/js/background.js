// 表示する画像のファイル名をリストで用意（文字列としてURLを囲む）
const images = [
    "https://www.sanrio.co.jp/wp-content/uploads/2022/06/gallery-cogimyun1.png",
    "https://fashionsnap-assets.com/asset/format=auto,height=800/dictionary/images/2023/08/pattern-19-gingham-check.png",
    "https://www.sanrio.co.jp/wp-content/uploads/2022/06/gallery-hellokitty-kt50th-5.jpg",
    "https://i0.wp.com/sozaikoujou.com/wordpress/wp-content/uploads/2016/01/background_Ginghamche_pink.png?fit=1000%2C1000&ssl=1"
  ];
  
  // images配列の中からランダムに1つ選択
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  
  // <img>要素を作成
  const bgImage = document.createElement("img");
  
  // 作成した<img>要素に選ばれた画像ファイルを設定（URLを直接指定）
  bgImage.src = chosenImage;
  
  // 画像のスタイルを調整（例: 背景として全画面に設定）
  bgImage.style.position = "absolute";
  bgImage.style.top = "0";
  bgImage.style.left = "0";
  bgImage.style.width = "100%";
  bgImage.style.height = "100%";
  bgImage.style.objectFit = "cover";
  bgImage.style.zIndex = "-1"; // 背景にするため
  
  // <body>に作成した<img>要素を追加して表示
  document.body.appendChild(bgImage);
  