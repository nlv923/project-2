const express = require('express');
const router = express.Router();
const db = require('../db/models');
const { asyncHandler, csrf, csrfProtection } = require('./utils');
const { requireAuth } = require('../auth')


router.get('/', requireAuth, csrfProtection, asyncHandler(async (req, res) => {

    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    res.render('vaults', { vaults, token: req.csrfToken() })
}))

router.get('/:id', requireAuth, csrfProtection, asyncHandler(async (req, res) => {
    const vault = await db.Vault.findByPk(req.params.id, { include: db.Movie })
    const user = await db.User.findOne({ where: { id: req.session.auth.userId } });
    const vaultedMovies = await db.Movie.findAll({
        include:  { model: db.Vault, through: { attributes: ['movieId'], where: {
            vaultId: vault.id
        } }}
    })
    res.render('vault', { vault, vaultedMovies, token:req.csrfToken() })
}))

router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {
    const vaultMovie = await db.VaultMovie.findOne({
        where: {
            movieId: req.body.movieId,
            vaultId: req.params.id
        }
    })
    await vaultMovie.destroy()
    res.json('The movie has been deleted!')
}))

router.post('/', requireAuth, asyncHandler(async (req, res) => {
    const user = await db.User.findOne({ where: { id: req.session.auth.userId } });
    // find how many vaults are associated with the current user
    const userVaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    const vaults = await db.Vault.findAll({ where: { userId: req.session.auth.userId } })
    // if the user has 10 vaults, tell them they can't add anymore and redirect to the vaults page
    if (userVaults.length < 10) {
        const vault = db.Vault.build({
            name: req.body.name,
            userId: user.id
        })
        await vault.save()
        res.redirect('/vaults')        
    }
    res.render('vaults', { userVaults, vaults })
}))

router.post(/\/\d+/, requireAuth, asyncHandler(async (req, res) => {
    const id = req.path.split('/')[1]
        const vault = await db.Vault.findOne({
        where: {
            id: id
        },
    })
        const vaultMovies = await db.VaultMovie.findAll({
        where: {
            vaultId: id
        },
    })
    vaultMovies.forEach((movie) => {
        movie.destroy()
    })
    await vault.destroy()
    res.redirect('/vaults')
}))
module.exports = router;