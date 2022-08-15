const http = require('request')
// токен и id чата берутся из config.json:
const config = require('../config/config.json')

module.exports.sendMessage = (req, res) => {
  let message = ''
  const { user_name, user_email, user_phone, user_text } = req.body
  // каждый элемент объекта помещаю в массив:
  const fields = [
    `<b>Имя: </b>${user_name}`,
    `<b>E-mail: </b>${user_email}`,
    `<b>Телефон: </b>${user_phone}`,
    `<b>Сообщение: </b>${user_text}`,
  ]
  // Перебираю массив и склеиваю в одну строку:
  fields.forEach((field) => message += field + '\n')
  // Кодирую результат в текст, понятный адресной строке:
  message = encodeURI(message)
  // Запрос на Адрес:
  const uriRequest = `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat_id}&parse_mode=html&text=${message}`
  // Делаю запрос:
  http.post(uriRequest, (error, response, body) => {
    console.log('error:', error)
    console.log('statusCode:', response && response.statusCode)
    console.log('body:', body)

    if (response.statusCode !== 200) {
      return res.status(400).json({ status: 'error', message: 'Произошла ошибка!' })
    }

    if (response.statusCode === 200) {
      return res.status(200).json({ status: 'ok', message: 'Успешно отправлено!' })
    }
  })
}