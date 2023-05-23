import { DeleteUserService } from '../services/DeleteUserService';
import { Request, Response } from 'express';

class DeleteUserController {
	async handle(req: Request, res: Response) {
		const deleteUser = new DeleteUserService();

		const id = req.query.id as string;

		await deleteUser.execute({ id });

		return res.json({ message: 'User deleted successfully' });
	}
}

export { DeleteUserController };
