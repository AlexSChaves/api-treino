import prismaClient from '../prisma';

interface User {
	id: string;
}

class DeleteUserService {
	async execute({ id }: User) {
		await prismaClient.user.delete({
			where: { id },
		});
	}
}

export { DeleteUserService };
