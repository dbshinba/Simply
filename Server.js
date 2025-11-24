console.log('SIMPLY Server starting...');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'SIMPLY Backend LIVE', time: new Date() });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
