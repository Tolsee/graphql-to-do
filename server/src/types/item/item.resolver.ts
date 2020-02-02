import Item from './item.model';
import Board from 'types/board/board.model';

export default {
    Query: {
        item: (_, args: any) =>
            Item.findById(args.id)
                .lean()
                .exec()
        ,
        items: (_, args: any) =>
            Item.find(args.state ? { state: args.state } : {})
                .lean()
                .exec()
    },
    Mutation: {
        newItem: (_, arg: any) =>
            Item.create({ ...arg.input })
        ,
        updateItem: (_, args: any) =>
            Item.findByIdAndUpdate(args.id, args.input, {new: true})
                .lean()
                .exec()
        ,
        deleteItem: (_, args: any) =>
            Item.findByIdAndDelete(args.id)
                .lean()
                .exec()
    },
    Item: {
        board: (item) =>
            Board.findById(item.board)
                .lean()
                .exec()
    }
};
