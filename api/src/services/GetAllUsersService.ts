import prismaClient from '../prisma';

class GetAllUsersService {
	async execute() {
		const users = await prismaClient.user.findMany({
			select: {
				id: true,
				name: true,
				email: true,
			},
			orderBy: {
				created_at: 'desc',
			},
		});

		return users;
	}
}

export { GetAllUsersService };
