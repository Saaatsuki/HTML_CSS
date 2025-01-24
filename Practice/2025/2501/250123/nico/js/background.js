// 表示する画像のファイル名をリストで用意（文字列としてURLを囲む）
const images = [
    "https://www.sanrio.co.jp/wp-content/uploads/2022/06/gallery-cogimyun1.png",
    "https://www.sanrio.co.jp/wp-content/uploads/2022/06/gallery-cinnamon2.png",
    "https://www.sanrio.co.jp/wp-content/uploads/2022/06/gallery-hellokitty-kt50th-5.jpg",
    "https://animekabegami.com/image_wallpaper/1588087308.jpg"
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
  