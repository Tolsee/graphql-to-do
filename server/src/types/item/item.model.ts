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
        }
    },
    { timestamps: true }
);

const Item = model('item', itemSchema);

export default Item;
