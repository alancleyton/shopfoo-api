import express from 'express';
import cors from 'cors';

import { routes } from '@src/routes/router';
import { errorsMiddleware } from '@src/shared/middlewares/errors-middleware';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);
app.use(errorsMiddleware);

export { app };
