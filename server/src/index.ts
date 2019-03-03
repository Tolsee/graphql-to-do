import start from './server';

start().catch(error => {
    // tslint:disable-next-line:no-console
    console.error(error);
});
