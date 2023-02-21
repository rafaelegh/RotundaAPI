const Animal = require("../model/Animal");

exports.zoo = (req, res, next) => {

    const {name, sound, phrase} = req.body;

    const newAnimal = new Animal(name, sound);

    res.status(200).json({
        animalName: newAnimal.whatAnimalIsThis(),
        animalPhrase: newAnimal.speak(phrase),
    });
 }