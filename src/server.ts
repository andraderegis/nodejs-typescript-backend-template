import express from 'express';

import '@controllers/users-controller';

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'NodeJS Typescript Setup'
    });
});

app.listen(3333);