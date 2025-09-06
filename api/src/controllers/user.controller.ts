// controllers/user.controller.ts
import { Request, Response } from 'express';
import { fetchUserDetails } from '../services/user.service';

interface AuthRequest extends Request {
  user?: {
    id: number;
  };
}

export const getUserDetails = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ error: 'Unauthorized' });

    const user = await fetchUserDetails(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    return res.json(user);
  } catch (err) {
    console.error('Greška pri dohvatanju korisnika:', err);
    res.status(500).json({ error: 'Greška na serveru' });
  }
};
