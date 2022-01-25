import type { NextApiRequest, NextApiResponse } from 'next'
import initMiddleware from '../../lib/initMiddleware';
import { users } from '../../models/datas/users';
import { UserDescription } from '../../models/types';
import Cors from 'cors'

// Initialize the cors middleware
const cors = initMiddleware(
    // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
    Cors({
        // Only allow requests with GET, POST and OPTIONS
        methods: ['GET', 'OPTIONS'],
        origin: ['http://localhost:5200'],

    })
);

const handler = async (
    _req: NextApiRequest,
    res: NextApiResponse<UserDescription[]>
) => {
    // Run cors
    await cors(_req, res);
    res.status(200).json(users);
};

export default handler;