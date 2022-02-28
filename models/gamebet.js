const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/*Variables del juego con las apuestas */
const gameSchema = new Schema({
    game: {
        type: String,
        trim: true,
        required: true
    },
    gamerBet: {
        type: Array,
        required: true
    },
    inProgress: {
        type: Boolean,        
        required: true
    },
    winner: {
        type: String,
        required: true
    }
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('GameBet', gameSchema);