const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/*Variables del un jugador */
const gameSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Gamer', gameSchema);