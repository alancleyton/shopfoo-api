import { Router, type Request, Response } from 'express';

const routes = Router();

routes.get('/', (request: Request, response: Response): Response => {
  return response.json({ msg: 'Hello world!' });
});

export { routes };
