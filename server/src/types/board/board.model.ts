import { model, Schema } from 'mongoose';

const boardSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

const Board = model('board', boardSchema);

export default Board;
