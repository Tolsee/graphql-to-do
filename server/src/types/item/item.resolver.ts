import Item from './item.model';

export default {
    Query: {
        item: (_, args: any) =>
            Item.findById(args.id)
                .lean()
                .exec()
        ,
        items: () =>
            Item.find({})
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
    }
};
