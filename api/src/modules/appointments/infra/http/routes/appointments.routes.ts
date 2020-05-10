import { Router } from 'express';

import ensureAuthentication from '@modules/users/infra/http/middlewares/EnsureAuthentication';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

// SoC separation of concerns
// DTO - Data transfer object

appointmentsRouter.use(ensureAuthentication);

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
