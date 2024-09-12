const {Router} = require('express')
const {getGames, getGame, postGame, patchGame, deleteGame} = require('../controllers/game')

const router = Router()

router.get('/', getGames)

router.get('/:id', getGame)

router.post('/', postGame)

router.patch('/:id', patchGame)

router.delete('/:id', deleteGame)

module.exports = router