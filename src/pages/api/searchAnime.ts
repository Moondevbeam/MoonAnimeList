// /pages/api/searchAnime.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { q } = req.query;

  try {
    const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(q as string)}&sfw`;
    const response = await axios.get(apiUrl);
    res.status(200).json(response.data.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during the search' });
  }
};
