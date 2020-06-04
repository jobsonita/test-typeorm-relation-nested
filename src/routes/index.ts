import { Router } from 'express';
import AppError from '../error/AppError';

const routes = Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.get('/error', (_request, _response) => {
  throw new AppError('Bye World');
});

export default routes;
