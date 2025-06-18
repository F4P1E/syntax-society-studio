export async function fetchResources() {
  const res = await fetch('https://api.example.com/resources', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
    },
    next: { revalidate: 60 }, // Optional: ISR support
  });

  if (!res.ok) {
    throw new Error('Failed to fetch resources');
  }

  return res.json();
}
