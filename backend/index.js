const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, '../frontend')));

// 기본 라우트
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// API 라우트 예시
app.get('/api/example', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

