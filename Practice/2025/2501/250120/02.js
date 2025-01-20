// h1要素のクリックイベントを設定
title.onclick = handleTitleClick; // クリックイベントを設定

// マウスが要素上に入る／出るイベントを設定
title.addEventListener("mouseenter", handleMouseEnter); // マウスエンターイベント
title.addEventListener("mouseleave", handleMouseLeave); // マウスリーブイベント

// ウィンドウサイズ変更時のイベント処理
function handleWindow() {
    document.body.style.backgroundColor = "lemonchiffon"; // 背景色を変更
}

// リサイズイベントを設定
window.addEventListener("resize", handleWindow); // リサイズイベント
