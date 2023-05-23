import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { GetAllUsersController } from '../controllers/GetAllUsersController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';
import { UpdateUserController } from '../controllers/UpdateUserController';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.get('/users', new GetAllUsersController().handle);
router.get('/user', new GetUserByIdController().handle);
router.put('/user', new UpdateUserController().handle);
router.delete('/user', new DeleteUserController().handle);

export default router;
