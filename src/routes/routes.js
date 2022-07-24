const router = require('express').Router()

router.get('/clients', (req, res) => {
    res.send({
        ok: 'test'
    })
})

module.exports = router