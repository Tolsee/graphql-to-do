import options from 'config';
import { connect, Mongoose } from 'mongoose';

const connectDb  = (url = options.dbUrl, opts = {}): Promise<Mongoose> => {
  return connect(
    url,
    { ...opts, useNewUrlParser: true }
  );
};

export default connectDb;
