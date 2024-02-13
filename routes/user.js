const express = require('express');
const router = express.Router();

let voitures = [{ id: 1, name: "clio" }, { id: 2, name: "megane" }, { id: 3, name: "range" }];


router.post('/', (req, res) => {
    const nouvelleVoiture = req.body;
    voitures.push(nouvelleVoiture);
    res.json(nouvelleVoiture);
});


router.get('/', (req, res) => {
    res.json(voitures);
});


router.get('/:id', (req, res) => {
    const voiture = voitures.find(v => v.id === parseInt(req.params.id));
    if (voiture) {
        res.json(voiture);
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});


router.put('/:id', (req, res) => {
    const voiture = voitures.find(v => v.id === parseInt(req.params.id));
    if (voiture) {
        voiture.name = req.body.name;
        res.json(voiture);
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});


router.delete('/:id', (req, res) => {
    const voitureIndex = voitures.findIndex(v => v.id === parseInt(req.params.id));
    if (voitureIndex !== -1) {
        voitures.splice(voitureIndex, 1);
        res.send('Voiture supprimée avec succès');
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});

module.exports = router;
