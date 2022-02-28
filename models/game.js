const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

/** Variables de un juego */
const gameSchema = new Schema({
    gamers: {
        type: Array,
        required: true
    },
    inProgress:{
        type: Boolean,        
        required: true
    }
}, { timestamps: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gameSchema);