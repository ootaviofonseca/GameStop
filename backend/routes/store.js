const {Router} = require('express')
const {getNotMyGames} = require('../controllers/store')

const router = Router()

router.get('/', getNotMyGames)

module.exports = router