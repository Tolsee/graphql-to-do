import { model, Schema } from 'mongoose';

const itemSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        body: {
            type: String,
            required: true
        },
        state: {
            type: String,
            enum: ['todo', 'progress', 'complete'],
            default: 'todo'
        }
    },
    { timestamps: true }
);

const Item = model('item', itemSchema);

export default Item;
