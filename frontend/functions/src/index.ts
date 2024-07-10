import { onRequest } from 'firebase-functions/v2/https';

type Indexable = { [key: string]: any};

export const helloworld = onRequest((request, response) => {
    debugger;
    const name = request.params[0];
    const items: Indexable = {lamp: 'this is a lamp', chair: 'good eohfeoiwjfew chair'}
    const message = items[name];
    response.send(`<h1>${message}</h1>`);
});