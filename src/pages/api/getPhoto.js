export default async function handler(req, res) {
  try {
    const { page } = req.query;
    const response = await fetch(`https://api.pexels.com/v1/curated?page=${page}&per_page=10`, { 
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching photo:', error.message);
    res.status(500).json({ error: 'Error fetching photo' });
  }
}
