export const getCheckboxData = async () => {
  try {
    // const res = await fetch('http://localhost:3000/api/checkbox');
    const res = await fetch(
      'https://theatre-garden-back.vercel.app/api/checkbox'
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error('Error fetching:', err);
  }

  return null;
};
