class Animal {
    constructor(name, sound) {
        if (typeof name !== 'string' || typeof sound !== 'string') {
            throw new Error('name and sound should be a strings...');
        }
        this.name = name;
        this.sound = sound;
    }

    whatAnimalIsThis() {
        return this.name;
    }

    speak(phrase) {
        if(typeof phrase !== "string") {
            throw Error("need a phrase (string) to speak");
        }
        const text = phrase.split(" ").join(` ${this.sound} `);
        const newText = `${text} ${this.sound}`
        console.log(newText);
        return newText;
    }
}

module.exports = Animal;