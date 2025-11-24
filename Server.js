const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Telegram Bot
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

// Routes
app.get('/', (req, res) => {
  res.json({ status: 'SIMPLY Backend Running', timestamp: new Date() });
});

app.post('/webhook', (req, res) => {
  const update = req.body;
  console.log('Telegram update:', update);
  res.send('OK');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ SIMPLY Backend running on port ${PORT}`);
  console.log(`📱 WebApp: ${process.env.WEBAPP_URL}`);
});
