import { UpdateUserService } from '../services/UpdateUserService';
import { Request, Response } from 'express';

class UpdateUserController {
	async handle(req: Request, res: Response) {
		const updateUser = new UpdateUserService();

		const id = req.query.id as string;
		const { name, email, password } = req.body;

		const user = await updateUser.execute({ id, name, email, password });

		return res.json(user);
	}
}

export { UpdateUserController };
