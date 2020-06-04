import { Router } from 'express';

import usersRoutes from './users.routes';
import userProfilesRoutes from './user_profiles.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/user_profiles', userProfilesRoutes);

export default routes;
