const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;

// body-parser ミドルウェアの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// static フォルダに格納したHTMLファイルを提供
app.use(express.static(path.join(__dirname)));

// ユーザーの入力を受け取ってファイルに書き込むエンドポイント
app.post('/save', (req, res) => {
  const userInput = req.body.text; // クライアントから送られたデータ

  // ファイルに書き込む
  fs.appendFile('output.txt', userInput + '\n', (err) => {
    if (err) {
      return res.status(500).send('Error writing to file');
    }
    res.send('Data written to file successfully');
  });
});

// サーバーの起動
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
