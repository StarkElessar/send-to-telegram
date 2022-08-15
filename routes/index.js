const Router = require('express')
const router = new Router
const ctrlTelegram = require('../api/telegramMsg')

router.post('/telegram', ctrlTelegram.sendMessage)

module.exports = router