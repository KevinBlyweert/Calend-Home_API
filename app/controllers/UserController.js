const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé!' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

exports.logIn = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            !user
                ? res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte.' })
                : bcrypt.compare(req.body.password, user.password)
                    .then(valid => {
                        !valid
                            ? res.status(401).json({ message: 'Paire identifiant/mot de passe incorrecte.' })
                            : res.status(200).json({
                                userId: user._id,
                                token: jwt.sign(
                                    { userId: user._id },
                                    process.env.SECRET,
                                    { expiresIn: '24h' },
                                )
                            });

                    })
                    .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};