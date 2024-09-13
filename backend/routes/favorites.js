const {Router} = require('express')
const {getAllFavorites, postFavorite, deleteFavorite} = require('../controllers/favorites')

const router = Router()

router.get('/', getAllFavorites)

router.post('/:id', postFavorite)

router.delete('/:id', deleteFavorite)

module.exports = router