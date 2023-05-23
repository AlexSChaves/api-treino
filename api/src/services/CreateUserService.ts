import prismaClient from '../prisma';
import { hash } from 'bcryptjs';

interface User {
	name: string;
	email: string;
	password: string;
}

class CreateUserService {
	async execute({ name, email, password }: User) {
		if (!email || !password) throw new Error('Email or Password is required');

		let emailRegex = /^[a-zA-Z0-9_\-.]+@[a-zA-Z0-9_\-]+\.[a-zA-Z]{2,}$/;

		let passwordRegex =
			/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

		if (!emailRegex.test(email)) throw new Error('Email format not valid');

		if (!passwordRegex.test(password))
			throw new Error(
				'Password must be at least 8 characters long, ' +
					'include at least one number, one capital, ' +
					'letter and one special character'
			);

		if (password.length < 8) {
			throw new Error('Password must be at least 8 characters long');
		}

		const userAlreadyExists = await prismaClient.user.findFirst({
			where: { email },
		});

		if (userAlreadyExists) throw new Error('User already exists');

		const passwordHash = await hash(password, 8);

		const user = await prismaClient.user.create({
			data: {
				name,
				email,
				password: passwordHash,
			},
			select: {
				id: true,
				email: true,
				name: true,
			},
		});

		return user;
	}
}

export { CreateUserService };
