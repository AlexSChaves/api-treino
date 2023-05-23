import { GetUserByIdService } from '../services/GetUserByIdService';
import { Request, Response } from 'express';

class GetUserByIdController {
	async handle(req: Request, res: Response) {
		const getUserById = new GetUserByIdService();

		const id = req.query.id as string;

		const user = await getUserById.execute({ id });

		return res.json(user);
	}
}

export { GetUserByIdController };
