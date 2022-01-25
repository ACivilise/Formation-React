import type { NextApiRequest, NextApiResponse } from 'next'
import { users } from '../../models/datas/users';
import { UserDescription } from '../../models/types';


export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<UserDescription[]>
) {
    res.status(200).json(users);
}
