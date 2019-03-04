import { readFile } from 'fs';
import { join } from 'path';

export default (type: string): Promise<string> =>
    new Promise((resolve, reject) => {
        const pathToSchema = join(
            process.cwd(),
            `src/types/${type}/${type}.gql`
        );
        readFile(pathToSchema, { encoding: 'utf-8' }, (err, schema) => {
            if (err) {
                return reject(err);
            }

            resolve(schema);
        });
    });

