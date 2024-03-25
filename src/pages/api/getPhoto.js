// pages/api/getPhoto.js

let nextPageUrl = 'https://api.pexels.com/v1/curated?per_page=35'; // Initial next page URL

export default async function handler(req, res) {
  try {
    const response = await fetch(nextPageUrl, {
      headers: {
        Authorization: process.env.NEXT_PUBLIC_API_KEY
      }
    });

    if (!response.ok) {
      throw new Error('Failed to fetch photo');
    }

    const data = await response.json();
    nextPageUrl = data.next_page || null; // Update next page URL for the next fetch

    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching photo:', error.message);
    res.status(500).json({ error: 'Error fetching photo' });
  }
}
