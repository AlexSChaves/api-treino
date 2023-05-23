import { GetAllUsersService } from '../services/GetAllUsersService';
import { Request, Response } from 'express';

class GetAllUsersController {
	async handle(req: Request, res: Response) {
		const getAllUsers = new GetAllUsersService();

		const users = await getAllUsers.execute();

		return res.json(users);
	}
}

export { GetAllUsersController };
