// api/server.js
const express = require('express');
const app = express();

// 요청이 오면 단축된 URL을 반환
app.get('/:shortcode', (req, res) => {
  const shortcode = req.params.shortcode;
  res.send(`Short URL: ${shortcode}`);
});

// 서버리스 함수로 처리
module.exports = (req, res) => {
  app(req, res);
};
