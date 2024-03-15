export const sendEmail = async (data: { subject: string; html: string }) => {
  const response = await fetch(`${import.meta.env.VITE_URL_API}/sendEmailFunction`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.ok;
};
