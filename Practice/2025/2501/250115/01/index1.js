let youtuber = {
    list: {
      business: {
        youtubers: [
          {
            name: "しまぶー",
            age: 20,
            teachProgramming: function() {
              console.log("プログラミングを教える");
            }
          },
          {
            name: "あっちゃん",
            age: 37,
            teachHistory: function() {
              console.log("歴史を教える");
            }
          }
        ],
        teach: function() {
          console.log("教える");
        }
      },
      entertainment: {
        youtubers: [
          {
            name: "ヒカキン",
            age: 30, // 年齢を仮定して入れました
            makeSmile: function() {
              console.log("笑顔を作る");
            }
          },
          {
            name: "はじめしゃちょー",
            age: 27, // 年齢を仮定して入れました
            makeSmile: function() {
              console.log("笑顔を作る");
            }
          }
        ],
        plan: function() {
          console.log("計画する");
        },
        uploadVideo: function() {
          console.log("ビデオをアップロードする");
        }
      }
    }
  };
  
  // メソッドの呼び出し例
  youtuber.list.business.youtubers[0].teachProgramming(); // しまぶーがプログラミングを教える
  youtuber.list.entertainment.youtubers[1].makeSmile(); // はじめしゃちょーが笑顔を作る
  