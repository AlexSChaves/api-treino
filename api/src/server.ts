import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const port = process.env.PORT || 3001;

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
	if (error instanceof Error) {
		return res.status(400).json({
			error: error.message,
		});
	}

	return res.status(500).json({
		status: 'error',
		message: 'Internal Server Error',
	});
});

app.listen(port, () => console.log(`Server is listening on ${port}`));
