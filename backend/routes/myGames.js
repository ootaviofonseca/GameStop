const {Router} = require('express')
const {getAllMyGames, postMyGame, deleteMyGame} = require('../controllers/myGames')

const router = Router()

router.get('/', getAllMyGames)

router.post('/:id', postMyGame)

router.delete('/:id', deleteMyGame)

module.exports = router