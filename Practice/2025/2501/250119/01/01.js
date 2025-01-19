// const playerName = "Yeji";
// const plauerPoints = 2000;
// const playerBeautiful = true;

const player = {
    name: "Yeji", 
    points: 2000, 
    beautiful: true,
};

// プレイヤー全体を出力
console.log(player);

// 特定のプロパティを出力
console.log(player.name); 

// for...in を使用してオブジェクトのプロパティをループ
for (let key in player) {
    console.log(`${key}: ${player[key]}`);
}

// または Object.keys を使用してキーをループ
Object.keys(player).forEach(key => {
    console.log(`${key}: ${player[key]}`);
});
