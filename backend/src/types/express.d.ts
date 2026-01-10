import { JwtPayload } from 'jsonwebtoken';

declare global {
    namespace Express {
        interface Request {
            id?: string;
        }
    }
}

export interface CustomJwtPayload extends JwtPayload {
    id: string;
}

