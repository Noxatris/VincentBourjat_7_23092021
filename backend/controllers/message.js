const Message = require('../models/message');

exports.getAllMessage = (req, res, next) => {
    Message.findAll({
         order: [['date_creation', 'DESC']]
    })
    .then(message => {
        console.log(message);
        res.status(201).json(message)
    })
    .catch(error => {
        res.status(500).json({ error })
    })
};

exports.getOneMessage = (req, res, next) => {
    Message.findAll({
        where: {
            id: req.body.id
        }
    })
    .then(message => {
        res.status(201).json(message)
    })
    .catch(error => {
        res.status(500).json({ error })
    })
};

exports.createMessage = (req, res, next) => {
    const message = Message.build({contenu: req.body.contenu, author: req.body.author});
    message.save();
    res.status(201).json({message: 'Message créé'});
};

exports.deleteMessage = (req, res, next) => {
    Message.destroy({
        where: {
            id: req.body.id
        }
    })
    .then(() => { 
        res.status(201).json({message: 'Message supprimé'})
    })
    .catch(error => {
        res.status(500).json({ error })
    })
};

exports.updateMessage = (req, res, next) => {
    Message.update({contenu: contenu, author: author, img_url: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`},{
        where: {
            id: req.body.id
        },
        returning: true
    })
    .then(() => res.status(201).json({message: 'Message mise a jour'}))
    .catch(error => {
        res.status(500).json({ error })
    })
};
exports.likeMessage = (req, res, next) => {};