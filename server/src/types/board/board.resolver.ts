import Item from 'types/item/item.model';
import Board from './board.model';

export default {
    Query: {
        board: (_, args: any) =>
            Board.findById(args.id)
                .lean()
                .exec()
        ,
        boards: (_, args: any) =>
            Board.find({})
                .lean()
                .exec()
    },
    Mutation: {
        newBoard: (_, arg: any) =>
            Board.create({ ...arg.input })
        ,
        updateBoard: (_, args: any) =>
            Board.findByIdAndUpdate(args.id, args.input, {new: true})
                .lean()
                .exec()
        ,
        deleteBoard: (_, args: any) =>
            Board.findByIdAndDelete(args.id)
                .lean()
                .exec()
    },
    Board: {
        items: (board) =>
            Item.find({ board: board._id })
                .lean()
                .exec()
    }
};
