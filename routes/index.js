const { json } = require('express')
const Router = require('express')
const router = new Router
const ctrlTelegram = require('../api/telegramMsg')

router.post('/telegram', ctrlTelegram.sendMessage)
router.get('/', (req, res) => {
  return res.json({ message: 'ok' })
})

module.exports = router