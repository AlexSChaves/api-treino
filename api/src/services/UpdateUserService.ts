import prismaClient from '../prisma';
import bcrypt from 'bcryptjs';

interface User {
	id: string;
	name: string;
	email: string;
	password: string;
}

class UpdateUserService {
	async execute({ id, name, email, password }: User) {
		const hashPassword = await bcrypt.hash(password, 8);

		const user = await prismaClient.user.update({
			where: { id },
			data: {
				name,
				email,
				password: hashPassword,
			},
			select: {
				name: true,
				email: true,
			},
		});

		return user;
	}
}

export { UpdateUserService };
