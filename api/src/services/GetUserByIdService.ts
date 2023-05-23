import prismaClient from '../prisma';

interface User {
	id: string;
}

class GetUserByIdService {
	async execute({ id }: User) {
		const user = await prismaClient.user.findFirst({
			where: { id },
			select: {
				name: true,
				email: true,
			},
		});

		return user;
	}
}

export { GetUserByIdService };
